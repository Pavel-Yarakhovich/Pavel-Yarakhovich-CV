import React, { memo } from "react";
import { Transition } from "react-transition-group";
import { GenerateCV } from "../GenerateCV";
import * as Styled from "./styled";

interface Props {
  shownMenu: boolean;
  hideMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SideMenu: React.FC<Props> = memo(({ shownMenu, hideMenu }) => {
  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    const { title } = e.target as HTMLSpanElement;
    scrollIntoView(title);
  };

  return (
    <Transition
      in={shownMenu}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 250,
      }}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Styled.Backdrop
          onClick={hideMenu}
          style={{
            ...defaultMenu,
            ...transitionMenu[state],
          }}
        >
          <Styled.Container>
            <Styled.Menu>
              <Styled.MenuItem onClick={handleLinkClick} title="about">
                About me
              </Styled.MenuItem>
              <Styled.MenuItem onClick={handleLinkClick} title="toolkit">
                My toolkit
              </Styled.MenuItem>
              <Styled.MenuItem onClick={handleLinkClick} title="developer">
                Me as a developer
              </Styled.MenuItem>
              <Styled.MenuItem onClick={handleLinkClick} title="person">
                Me as a person
              </Styled.MenuItem>
              <Styled.MenuItem onClick={handleLinkClick} title="contacts">
                Contacts
              </Styled.MenuItem>
              <GenerateCV />
            </Styled.Menu>
          </Styled.Container>
        </Styled.Backdrop>
      )}
    </Transition>
  );
});

const defaultMenu = {
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "all 250ms ease-out",
};
const transitionMenu = {
  entering: { transform: "scaleX(0)" },
  entered: { transform: "scaleX(1)" },
  exiting: { transform: "scaleX(0)" },
  exited: { transform: "scaleX(0)" },
  unmounted: { transform: "scaleX(0)" },
};
