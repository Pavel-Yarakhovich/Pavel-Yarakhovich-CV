import React, { memo, useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../Configuration/api";
import { Repos } from "./Repos";
import * as Styled from "./styled";

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

export const Github: React.FC = memo(() => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>();
  const [repos, setRepos] = useState<IRepo[] | undefined>();

  const getGithubUserInfo = async () => {
    const res = await axios.get(API.gitHub);
    setUserInfo(res.data);
  };
  const getRepos = async () => {
    const res = await axios.get(`${API.gitHub}/repos`);
    setRepos(res.data);
  };

  const getEvents = async () => {
    const res = await axios.get("https://api.github.com/users/Pavel-Yarakhovich/events/public");
  //   setResponse(res.data);
    console.log("events", res.data);
  };

  useEffect(() => {
    // getGithubUserInfo();
    // getRepos();
    // getEvents();
  }, []);

  console.log(repos);

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

        <Repos repos={repos} />
      </Styled.Container>
    </Styled.Wrapper>
  );
});
