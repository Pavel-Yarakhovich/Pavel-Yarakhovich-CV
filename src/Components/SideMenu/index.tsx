import React, { memo } from "react";
import { Transition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import ServiceAction from "../../Store/service/serviceAction";
import { GenerateCV } from "../GenerateCV";
import * as Styled from "./styled";

interface Props {
  shownMenu: boolean;
  hideMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const links = [
  { label: "about_me", title: "about" },
  { label: "my_toolkit", title: "toolkit" },
  { label: "me_developer", title: "developer" },
  { label: "me_person", title: "person" },
  { label: "contacts", title: "contacts" },
  { label: "CV", title: "cv" },
];

export const SideMenu: React.FC<Props> = memo(({ shownMenu, hideMenu }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLinkClick = (content: string) => {
    dispatch({ type: ServiceAction.OPEN_MODAL, payload: { content } });
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
              {links.map((link) => (
                <Styled.MenuItem
                  key={link.title}
                  onClick={() => handleLinkClick(link.title)}
                  title={link.title}
                >
                  {t(link.label)}
                </Styled.MenuItem>
              ))}
              {/* <GenerateCV /> */}
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
