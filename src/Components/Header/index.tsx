import React, { memo, useState } from "react";
import { Navigation } from "../Navigation";
import { ChooseLang } from "../ChooseLang";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import * as Styled from "./styled";

export const Header: React.FC<{ notification: String }> = memo((props) => {
  const { notification } = props;
  const [scrolled, setScrolled] = useState("0");
  window.addEventListener("scroll", () => {
    const percent = (document.body.clientHeight - window.innerHeight) / 100;
    const scrolled = String(window.pageYOffset / percent);
    setScrolled(scrolled);
  });

  return (
    <Styled.Wrapper>
      <Styled.BurgerMenu>
        <MenuRoundedIcon fontSize="large" />
      </Styled.BurgerMenu>
      <Navigation />
      <ChooseLang />
      <Styled.Notification id={String(scrolled)}>
        {notification}
      </Styled.Notification>
    </Styled.Wrapper>
  );
});
