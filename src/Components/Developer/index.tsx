import React, { memo } from "react";
import * as Styled from "./styled";

export const Developer: React.FC = memo(() => {
  return (
    <Styled.Container>
      <Styled.Content>Me as a Developer</Styled.Content>
    </Styled.Container>
  );
});