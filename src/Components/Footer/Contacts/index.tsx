import React, { memo } from "react";
import * as Styled from "./styled";

export const Contacts: React.FC = memo(() => {
  return (
    <Styled.Container>
      <Styled.Linkedin
        href="https://www.linkedin.com/in/pavel-yarohovich/"
        title="Linkedin"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Styled.PhoneNumber href="tel:80295559280">+375 (29) 555-92-80</Styled.PhoneNumber>
      <Styled.Github
        href="https://github.com/Pavel-Yarakhovich"
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      />
    </Styled.Container>
  );
});
