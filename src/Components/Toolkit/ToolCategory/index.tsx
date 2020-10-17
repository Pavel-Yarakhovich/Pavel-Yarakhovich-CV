import React, { memo } from "react";
import * as Styled from "./styled";

interface IProduct {
  image: string;
  sort: string;
  active: string;
  clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

declare module 'react' {
  interface HTMLAttributes<T> {
    image?:string;
    active?: boolean;
  }
}

export const ToolCategory: React.FC<IProduct> = memo((props) => {
  const { image, sort, clicked, active } = props;
  return (
    <Styled.Wrapper onClick={clicked} active={active === sort}>
      <Styled.Container id={sort} image={image}>
        {sort}
      </Styled.Container>
    </Styled.Wrapper>
  );
});
