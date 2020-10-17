import React, { memo, useState } from "react";
import { ToolCategory } from "./ToolCategory";
import { BlockHeader } from "../BlockHeader";
import L from "../../Assets/img/L.svg";
import F from "../../Assets/img/F.svg";
import B from "../../Assets/img/B.svg";
import C from "../../Assets/img/C.svg";
import R from "../../Assets/img/R.svg";
import P from "../../Assets/img/P.svg";
import T from "../../Assets/img/T.svg";
import V from "../../Assets/img/V.svg";
import Q from "../../Assets/img/Q.svg";
import S from "../../Assets/img/S.svg";
import A from "../../Assets/img/A.svg";

import * as Styled from "./styled";

interface Props {
  setChosenCategory: (id: string) => void,
  id: string,
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
        <ToolCategory
          clicked={categoryClickHandler}
          image={L}
          sort="languages"
          active={activeCategory}
        />
        <ToolCategory
          image={F}
          sort="frameworks"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={L}
          sort="libraries"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={B}
          sort="bundlers"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={C}
          sort="compilers"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={F}
          sort="formatters and linters"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={R}
          sort="runtimes"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={T}
          sort="testing"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={P}
          sort="package managers"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={V}
          sort="version control"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={C}
          sort="css preprocessors"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={C}
          sort="css-in-js"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={T}
          sort="task runners"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={S}
          sort="static site generators"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={C}
          sort="cms"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={Q}
          sort="query languages"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={A}
          sort="API"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
        <ToolCategory
          image={P}
          sort="packages"
          clicked={categoryClickHandler}
          active={activeCategory}
        />
      </Styled.CategoryWrapper>
    </Styled.Container>
  );
});
