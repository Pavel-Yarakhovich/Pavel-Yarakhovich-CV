import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import GraphQLLogo from "../../../Assets/img/graphql.png";
import * as Styled from "./styled";

export const QueryLanguages = memo(() => {
  return <Styled.Container>
    <CategoryItem
        name="Graph QL"
        description="Test description"
        logo={GraphQLLogo}
        knowledgeQuality={65}
      />
  </Styled.Container>;
});
