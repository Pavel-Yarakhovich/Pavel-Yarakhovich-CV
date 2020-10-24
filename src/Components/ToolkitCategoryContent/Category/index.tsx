import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import * as Styled from "./styled";

interface CategoryProps {
  content: {
    title: string;
    description: string,
    logo: string;
    docs: string;
    quality: number;
  }[];
}

export const Category = memo(({ content }: CategoryProps) => {
  return (
    <Styled.Container>
      {content.map((tool) => (
        <CategoryItem
          key={tool.title}
          name={tool.title}
          description={tool.description}
          logo={tool.logo}
          link={tool.docs}
          knowledgeQuality={tool.quality}
        />
      ))}
    </Styled.Container>
  );
});
