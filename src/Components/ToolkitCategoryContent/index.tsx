import React, { memo } from "react";
import { Category } from "./Category";
import { toolkit } from "../../Store/toolkit";

import * as Styled from "./styled";

interface Props {
  chosenCategory: string;
}

export const ToolkitCategoryContent: React.FC<Props> = memo((props) => {
  const { chosenCategory } = props;
  return (
    <Styled.CategoryContentWrapper>
      <Styled.Wrapper>
        <Styled.Content>
          {Object.entries(toolkit).map(
            ([name, value]) =>
              chosenCategory === name && <Category content={value.content} />
          )}
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.CategoryContentWrapper>
  );
});
