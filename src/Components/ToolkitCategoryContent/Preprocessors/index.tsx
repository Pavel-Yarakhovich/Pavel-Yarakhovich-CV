import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import SassLogo from "../../../Assets/img/sass.png";
import LessLogo from "../../../Assets/img/less.png";
import * as Styled from "./styled";

export const Preprocessors = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="SASS"
        description="Test description"
        logo={SassLogo}
      />
      <CategoryItem
        name="LESS"
        description="Test description"
        logo={LessLogo}
      />
    </Styled.Container>
  );
});
