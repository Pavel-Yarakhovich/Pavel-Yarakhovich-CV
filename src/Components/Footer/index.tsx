import React, { memo } from "react";
import { ContactForm } from "./ContactForm";
import * as Styled from "./styled";

export const Footer: React.FC = memo(() => {
  return (
    <Styled.Container id="contacts">
      <ContactForm />
    </Styled.Container>
  );
});
