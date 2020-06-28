import React, { memo } from "react";
import * as Styled from "./styled";

export const Navigation = memo(() => {
  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    const { title } = e.target as HTMLSpanElement;
    scrollIntoView(title);
  };

  return (
    <Styled.Navigation>
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
      </Styled.Menu>
    </Styled.Navigation>
  );
});
