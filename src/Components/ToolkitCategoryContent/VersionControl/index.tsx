import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import GitLogo from "../../../Assets/img/git.png";
import * as Styled from "./styled";

export const VersionControl = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="GIT"
        description="Test description"
        logo={GitLogo}
        knowledgeQuality={70}
      />
    </Styled.Container>
  );
});
