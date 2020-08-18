import React, { memo } from 'react';
import * as Styled from "./styled";

export const Reading = memo(() => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h3>Reading</h3>
        <p>Books are my passion. I love reading.</p>
        <p>Here's the list of books I've recently read.</p>
      </Styled.Container>
    </Styled.Wrapper>
  );
});
