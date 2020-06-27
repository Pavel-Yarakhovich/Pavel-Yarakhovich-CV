import React, { memo } from "react";
import { ToolCategory } from "./ToolCategory";
import TestImage from "../../Assets/img/product-sample.jpg";
import TestImage2 from "../../Assets/img/product2.webp";

import * as Styled from "./styled";

interface Props {
  setChosenCategory: (id: string) => void,
  id: string,
}

export const Toolkit: React.FC<Props> = memo(({ setChosenCategory, id }) => {
  const categoryClickHandler = (e: React.MouseEvent): void => {
    const { id } = e.target as HTMLDivElement;
    setChosenCategory(id);
  };
  return (
    <Styled.Container id={id}>
      <Styled.CategoryWrapper>
        <ToolCategory
          clicked={categoryClickHandler}
          image={TestImage}
          sort="languages"
        />
        <ToolCategory
          image={TestImage2}
          sort="frameworks"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="libraries"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="bundlers"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="compilers"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="formatters and linters"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="runtimes"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="testing"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="package managers"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="version control"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="css preprocessors"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="css-in-js"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="task runners"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="static site generators"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="cms"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="query languages"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage}
          sort="API"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={TestImage2}
          sort="packages"
          clicked={categoryClickHandler}
        />
      </Styled.CategoryWrapper>
    </Styled.Container>
  );
});
