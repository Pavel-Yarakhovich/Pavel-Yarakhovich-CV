import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import GulpLogo from "../../../Assets/img/gulp.png";
import * as Styled from "./styled";

export const TaskRunners = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="Gulp"
        description="Test description"
        logo={GulpLogo}
      />
    </Styled.Container>
  );
});
