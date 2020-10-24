import React, { memo, useState } from "react";
import { ToolCategory } from "./ToolCategory";
import { BlockHeader } from "../BlockHeader";
import { toolkit } from "../../Store/toolkit";

import * as Styled from "./styled";

interface Props {
  setChosenCategory: (id: string) => void;
  id: string;
}

export const Toolkit: React.FC<Props> = memo(({ setChosenCategory, id }) => {
  const [activeCategory, setActivecategory] = useState("languages");
  const categoryClickHandler = (e: React.MouseEvent): void => {
    const { id } = e.target as HTMLDivElement;
    setChosenCategory(id);
    setActivecategory(id);
  };
  return (
    <Styled.Container id={id}>
      <Styled.Wrapper>
        <BlockHeader header="My toolkit" />
      </Styled.Wrapper>
      <Styled.CategoryWrapper>
        {Object.entries(toolkit).map(([name, value]) => (
          <ToolCategory
            key={name}
            clicked={categoryClickHandler}
            image={value.logo}
            sort={name}
            active={activeCategory}
          />
        ))}
      </Styled.CategoryWrapper>
    </Styled.Container>
  );
});
