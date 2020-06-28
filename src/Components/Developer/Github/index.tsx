import React, { memo, useState, useEffect } from "react";
import axios from "axios";
import * as Styled from "./styled";

export const Github = memo(() => {
  const [info, setInfo] = useState({});
  const getGithubInfo = async () => {
    const res = await axios.get(
      "https://api.github.com/users/pavel-yarakhovich"
    );
    //   setResponse(res.data);
    return res.data;
  };
  // const getRepos = async () => {
  //   const res = await axios.get("https://api.github.com/users/Pavel-Yarakhovich/repos");
  // //   setResponse(res.data);
  //   console.log("repos", res.data);
  // };
  // const getEvents = async () => {
  //   const res = await axios.get("https://api.github.com/users/Pavel-Yarakhovich/received_events");
  // //   setResponse(res.data);
  //   console.log("events", res.data);
  // };
  // useEffect(() => setInfo(getGithubInfo()), []);
  // getRepos();
  // getEvents();
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.SelfDescription>
          <Styled.Avatar src="https://avatars3.githubusercontent.com/u/54272628?v=4" />
          <Styled.Info>
            <Styled.Name>Pavel Yarakhovich</Styled.Name>
            <Styled.Bio>Bio</Styled.Bio>
          </Styled.Info>
        </Styled.SelfDescription>
      </Styled.Container>
    </Styled.Wrapper>
  );
});
