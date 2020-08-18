import React, { memo } from "react";
import * as Styled from "./styled";

interface IProduct {
  image: string;
  sort: string;
  clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

declare module 'react' {
  interface HTMLAttributes<T> {
    image?:string;
  }
}

export const ToolCategory: React.FC<IProduct> = memo((props) => {
  const { image, sort, clicked } = props;
  return (
    <Styled.Wrapper onClick={clicked}>
      <Styled.Container id={sort} image={image}>
        {sort}
      </Styled.Container>
    </Styled.Wrapper>
  );
});
