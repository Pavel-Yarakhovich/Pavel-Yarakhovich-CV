import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import JSlogo from "../../../Assets/img/js.png";
import * as Styled from "./styled";

export const Languages = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="JavaScript"
        description="Test description"
        logo={JSlogo}
        link="https://learn.javascript.ru"
      />
    </Styled.Container>
  );
});
