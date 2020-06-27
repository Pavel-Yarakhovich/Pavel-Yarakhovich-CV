import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import GhostLogo from "../../../Assets/img/ghost.png";
import ContentfulLogo from "../../../Assets/img/contentful.png";
import * as Styled from "./styled";

export const Cms = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem
        name="Ghost"
        description="Test description"
        logo={GhostLogo}
      />
      <CategoryItem
        name="Contentful"
        description="Test description"
        logo={ContentfulLogo}
      />
    </Styled.Container>
  );
});
