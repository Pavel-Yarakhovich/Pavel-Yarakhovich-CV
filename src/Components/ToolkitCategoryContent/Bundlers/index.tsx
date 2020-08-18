import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import WebpackLogo from "../../../Assets/img/webpack.png";
import * as Styled from "./styled";

export const Bundlers = memo(() => {
  return <Styled.Container>
    <CategoryItem name="Webpack" description="Test description" logo={WebpackLogo} knowledgeQuality={60}/>
  </Styled.Container>;
});
