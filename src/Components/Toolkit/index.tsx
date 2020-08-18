import React, { memo } from "react";
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
  const categoryClickHandler = (e: React.MouseEvent): void => {
    const { id } = e.target as HTMLDivElement;
    setChosenCategory(id);
  };
  return (
    <Styled.Container id={id}>
      <BlockHeader header="My toolkit" />
      <Styled.CategoryWrapper>
        <ToolCategory
          clicked={categoryClickHandler}
          image={L}
          sort="languages"
        />
        <ToolCategory
          image={F}
          sort="frameworks"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={L}
          sort="libraries"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={B}
          sort="bundlers"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={C}
          sort="compilers"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={F}
          sort="formatters and linters"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={R}
          sort="runtimes"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={T}
          sort="testing"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={P}
          sort="package managers"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={V}
          sort="version control"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={C}
          sort="css preprocessors"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={C}
          sort="css-in-js"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={T}
          sort="task runners"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={S}
          sort="static site generators"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={C}
          sort="cms"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={Q}
          sort="query languages"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={A}
          sort="API"
          clicked={categoryClickHandler}
        />
        <ToolCategory
          image={P}
          sort="packages"
          clicked={categoryClickHandler}
        />
      </Styled.CategoryWrapper>
    </Styled.Container>
  );
});
