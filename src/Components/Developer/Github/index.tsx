import React, { memo, useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import axios from "axios";
import moment from "moment";
import { API } from "../../../Configuration/api";
import { Repos } from "./Repos";
import * as Styled from "./styled";
import { themes } from "../../../Configuration/themes";

interface IUserInfo {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
}

export interface IRepo {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
}

interface IEvent {
  [key: string]: number;
}

interface IPreparedEvent {
  date: string;
  qty: number;
}

const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) =>
  obj[key];

export const Github: React.FC = memo(() => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>();
  const [repos, setRepos] = useState<IRepo[] | undefined>();
  const [events, setEvents] = useState<IPreparedEvent[] | undefined>();

  const getGithubUserInfo = async () => {
    const res = await axios.get(API.gitHub);
    setUserInfo(res.data);
  };
  const getRepos = async () => {
    const res = await axios.get(`${API.gitHub}/repos`);
    setRepos(res.data);
  };

  const getEvents = async () => {
    const res = await axios.get(
      "https://api.github.com/users/Pavel-Yarakhovich/events" // find out what events it returns
    );
    console.log("res: ", res);
    const preparedEvents = res.data.reduce(
      (acc: [], curr: { created_at: string }) => {
        const { created_at } = curr;
        const formatted = (moment(created_at).format(
          "DD.MM.YYYY"
        ) as unknown) as ConcatArray<never>;
        return acc.concat(formatted);
      },
      []
    );
    let eventsObj: IEvent = {};
    preparedEvents.forEach((event: string) => {
      if (eventsObj[event] !== undefined) {
        eventsObj = { ...eventsObj, [event]: eventsObj[event] + 1 };
      } else {
        eventsObj = { ...eventsObj, [event]: 0 };
      }
    });
    const eventsArr: IPreparedEvent[] = [];
    Object.entries(eventsObj).map(([date, qty]) => {
      console.log("[date, qty]", date, qty);
      return eventsArr.push({
        date: date,
        qty: qty,
      })
    });
    console.log("eventsArr", eventsArr);
    setEvents(eventsArr);
  };

  useEffect(() => {
    getGithubUserInfo();
    getRepos();
    getEvents();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        {userInfo && (
          <Styled.SelfDescription>
            <Styled.Avatar src={userInfo.avatar_url && userInfo.avatar_url} />
            <Styled.Info>
              <Styled.Name>{userInfo.name && userInfo.name}</Styled.Name>
              <Styled.Bio>{userInfo.bio && userInfo.bio}</Styled.Bio>
              <Styled.Location>
                {userInfo.location && userInfo.location}
              </Styled.Location>
            </Styled.Info>
          </Styled.SelfDescription>
        )}

        {events && (
          <Styled.ChartContainer>
            <ResponsiveContainer>
              <BarChart
                width={100}
                height={100}
                data={events}
                layout="horizontal"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis dataKey="qty" />
                <Tooltip />
                <Bar dataKey="qty" fill={themes.button_hover} barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </Styled.ChartContainer>
        )}

        <Repos repos={repos} />
      </Styled.Container>
    </Styled.Wrapper>
  );
});
