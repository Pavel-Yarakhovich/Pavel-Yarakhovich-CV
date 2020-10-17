import React, { memo, useState } from "react";
import { Navigation } from "../Navigation";
import { ChooseLang } from "../ChooseLang";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { SideMenu } from "../SideMenu";
import * as Styled from "./styled";

export const Header: React.FC<{ notification: String }> = memo((props) => {
  const { notification } = props;
  const [scrolled, setScrolled] = useState("0");
  window.addEventListener("scroll", () => {
    const percent = (document.body.clientHeight - window.innerHeight) / 100;
    const scrolled = String(window.pageYOffset / percent);
    setScrolled(scrolled);
  });

  const [shownSideMenu, setShownSideMenu] = useState(false);
  const showSideMenu = (e: React.MouseEvent):void => {
    e.preventDefault();
    setShownSideMenu(true);
  };
  const handleHideMenu: React.MouseEventHandler = (e: React.MouseEvent<HTMLDivElement>) => setShownSideMenu(false);

  return (
    <>
    <Styled.Header>
      <Styled.Logo src='/img/logo.svg' alt='' />
      <Styled.Wrapper>
        <Styled.BurgerMenu onClick={showSideMenu}>
          <MenuRoundedIcon fontSize="large"onClick={showSideMenu} />
        </Styled.BurgerMenu>
        <Navigation />
        <ChooseLang />
        {/* <Styled.Notification id={String(scrolled)}>
          {notification}
        </Styled.Notification> */}
      </Styled.Wrapper>
    </Styled.Header>
    <SideMenu 
      shownMenu={shownSideMenu}
      hideMenu={handleHideMenu} 
    />
    </>
  );
});
