import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import GatsbyLogo from "../../../Assets/img/gatsby.png";
import * as Styled from "./styled";

export const SSG = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="Gatsby"
        description="Test description"
        logo={GatsbyLogo}
        knowledgeQuality={75}
      />
    </Styled.Container>
  );
});
