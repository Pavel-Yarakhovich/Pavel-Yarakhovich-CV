import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import EslintLogo from "../../../Assets/img/eslint.png";
import PrettierLogo from "../../../Assets/img/prettier.png";
import * as Styled from "./styled";

export const Linters = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="ESLint"
        description="Test description"
        logo={EslintLogo}
        knowledgeQuality={40}
      />
      <CategoryItem
        name="Prettier"
        description="Test description"
        logo={PrettierLogo}
        knowledgeQuality={50}
      />
    </Styled.Container>
  );
});
