import React, { memo } from "react";
import { Header } from "../../Components/Header";
import { Toolkit } from "../../Components/Toolkit";
import { Screensaver } from "../../Components/Screensaver";
import { Person } from "../../Components/Person";
import { Developer } from "../../Components/Developer";
import { Footer } from "../../Components/Footer";
import * as Styled from "./styled";

export const TitlePage: React.FC = memo(() => {
  return (
    <Styled.Container>
      <Header notification="Test notification" />
      <Styled.FirstScreen>
        <Screensaver />
        <Toolkit />
      </Styled.FirstScreen>
      <Developer />
      <Person />
      <Footer />
    </Styled.Container>
  );
});
