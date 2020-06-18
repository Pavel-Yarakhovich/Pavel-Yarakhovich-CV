import React, { memo } from "react";
import * as Styled from "./styled";

export const Navigation = memo(() => {
  return (
    <Styled.Navigation>
      <Styled.Menu>
        <Styled.MenuItem><a href="#about">About me</a></Styled.MenuItem>
        <Styled.MenuItem><a href="#toolkit">My toolkit</a></Styled.MenuItem>
        <Styled.MenuItem><a href="#developer" >Me as a developer</a></Styled.MenuItem>
        <Styled.MenuItem><a href="#person">Me as a person</a></Styled.MenuItem>
        <Styled.MenuItem><a href="#contacts">Contacts</a></Styled.MenuItem>
      </Styled.Menu>
    </Styled.Navigation>
  );
});
