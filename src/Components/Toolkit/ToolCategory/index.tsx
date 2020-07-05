import React, { memo } from "react";
import * as Styled from "./styled";

interface IProduct {
  image: string;
  sort: string;
  clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ToolCategory: React.FC<IProduct> = memo((props) => {
  const { image, sort, clicked } = props;
  return (
    <Styled.Wrapper onClick={clicked}>
      <Styled.Container id={sort}>
        {sort}
      </Styled.Container>
    </Styled.Wrapper>
  );
});
