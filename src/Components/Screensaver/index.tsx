import React, { memo } from "react";
import { AboutMe } from "../AboutMe";
import { PhotoButton } from "../PhotoButton";
import { SuitTest } from "../SuitTest/index";
import * as Styled from "./styled";

export const Screensaver = memo(() => {
  return (
    <Styled.Container id="about">
      <Styled.Top>
        <AboutMe />
        <PhotoButton />
      </Styled.Top>
      <SuitTest />
    </Styled.Container>
  );
});
