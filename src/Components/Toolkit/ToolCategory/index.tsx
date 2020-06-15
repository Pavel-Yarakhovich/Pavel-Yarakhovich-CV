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
      <Styled.Container>
        <Styled.Image src={image} alt="" />
        <Styled.Sort>{sort}</Styled.Sort>
      </Styled.Container>
      <Styled.Cover id={sort}/>
    </Styled.Wrapper>
  );
});
