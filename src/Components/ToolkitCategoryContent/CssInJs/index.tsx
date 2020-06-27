import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import StyledComponentsLogo from "../../../Assets/img/styled.png";
import EmotionLogo from "../../../Assets/img/emotion.png";
import * as Styled from "./styled";

export const CssInJs = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="Styled-components"
        description="Test description"
        logo={StyledComponentsLogo}
      />
      <CategoryItem
        name="Emotion"
        description="Test description"
        logo={EmotionLogo}
      />
    </Styled.Container>
  );
});
