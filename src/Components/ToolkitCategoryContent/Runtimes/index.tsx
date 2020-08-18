import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import NodeLogo from "../../../Assets/img/node.png";
import * as Styled from "./styled";

export const Runtimes = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem name="Node.js" description="Test description" logo={NodeLogo} knowledgeQuality={40}/>
    </Styled.Container>
  );
});
