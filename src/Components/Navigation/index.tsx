import React, { memo } from "react";
import * as Styled from "./styled";
import { useTranslation } from "react-i18next";

export const Navigation = memo(() => {
  const { t } = useTranslation();
  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    const { title } = e.target as HTMLSpanElement;
    scrollIntoView(title);
  };

  const links = [
    { title: "about", label: t("about_me") },
    { title: "toolkit", label: t("my_toolkit") },
    { title: "developer", label: t("me_developer") },
    { title: "person", label: t("me_person") },
    { title: "contacts", label: t("contacts") },
  ];

  return (
    <Styled.Navigation>
      <Styled.Menu>
        {links.map((link) => (
          <Styled.MenuItem
            key={link.title}
            onClick={handleLinkClick}
            title={link.title}
          >
            {link.label}
          </Styled.MenuItem>
        ))}
      </Styled.Menu>
    </Styled.Navigation>
  );
});
