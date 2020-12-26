import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import ServiceAction from "../../Store/service/serviceAction";
import * as Styled from "./styled";

export const Navigation = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const handleLinkClick = (title: string) => {
    scrollIntoView(title);
  };

  const handleInfoLinkClick = (content: string) => {
    dispatch({ type: ServiceAction.OPEN_MODAL, payload: { content } });
  };

  const links = [
    { title: "about", label: t("about_me"), handler: handleLinkClick },
    { title: "toolkit", label: t("my_toolkit"), handler: handleInfoLinkClick },
    { title: "work-experience", label: t("work_experience"), handler: handleInfoLinkClick },
    { title: "education", label: t("education"), handler: handleInfoLinkClick },
    { title: "contacts", label: t("contacts"), handler: handleLinkClick },
  ];

  return (
    <Styled.Navigation>
      <Styled.Menu>
        {links.map((link) => (
          <Styled.MenuItem
            key={link.title}
            onClick={() => link.handler(link.title)}
            title={link.title}
          >
            {link.label}
          </Styled.MenuItem>
        ))}
      </Styled.Menu>
    </Styled.Navigation>
  );
});
