import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import TSLogo from "../../../Assets/img/ts.png";
import BabelLogo from "../../../Assets/img/babel.png";
import * as Styled from "./styled";

export const Compilers = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="TypeScript"
        description="Test description"
        logo={TSLogo}
        knowledgeQuality={65}
      />
      <CategoryItem
        name="Babel"
        description="Test description"
        logo={BabelLogo}
        knowledgeQuality={80}
      />
    </Styled.Container>
  );
});
