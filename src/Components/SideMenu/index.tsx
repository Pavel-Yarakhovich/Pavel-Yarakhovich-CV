import React, { memo } from "react";
import { Transition } from "react-transition-group";
import * as Styled from "./styled";

interface Props {
  shownMenu: boolean;
  hideMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SideMenu: React.FC<Props> = memo(({ shownMenu, hideMenu }) => {
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
              <Styled.MenuItem>
                <a href="#about">About me</a>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <a href="#toolkit">My toolkit</a>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <a href="#developer">Me as a developer</a>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <a href="#person">Me as a person</a>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <a href="#contacts">Contacts</a>
              </Styled.MenuItem>
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
