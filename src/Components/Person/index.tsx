import React, { memo } from "react";
import * as Styled from "./styled";

export const Person: React.FC = memo(() => {
  return (
    <Styled.Container>
      <Styled.Content>Me as a Person</Styled.Content>
    </Styled.Container>
  );
});
