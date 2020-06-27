import React, { memo } from "react";
import { AboutMe } from "../AboutMe";
import * as Styled from "./styled";

export const Screensaver = memo(() => {
  return (
    <Styled.Container id="about">
      <AboutMe />
    </Styled.Container>
  );
});
