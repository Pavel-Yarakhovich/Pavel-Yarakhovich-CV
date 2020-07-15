import React, { memo, useState } from "react";
import { Header } from "../../Components/Header";
import { Toolkit } from "../../Components/Toolkit";
import { ToolkitCategoryContent } from "../../Components/ToolkitCategoryContent";
import { Screensaver } from "../../Components/Screensaver";
import { Person } from "../../Components/Person";
import { Developer } from "../../Components/Developer";
import { Footer } from "../../Components/Footer";
import { GenerateCV } from "../../Components/GenerateCV";
import * as Styled from "./styled";

export const TitlePage: React.FC = memo(() => {
  const [chosenCategory, setChosenCategory] = useState("languages");

  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({block: "center", behavior: "smooth"});
  };

  const handleChosenCategory = (id: string) => {
    setChosenCategory(id);
    scrollIntoView("toolkit");
  };

  
  
  return (
    <Styled.Container>
      <Header notification="Test notification" />
      
      <Styled.FirstScreen>
        <Screensaver />
        <Toolkit setChosenCategory={handleChosenCategory} id="toolkit"/>
      </Styled.FirstScreen>

      <ToolkitCategoryContent chosenCategory={chosenCategory} />
      <Developer />
      <Person />
      <Footer />
    </Styled.Container>
  );
});
