import React, { memo, useState } from "react";
import { ToolCategory } from "./ToolCategory";
import TestImage from "../../Assets/img/product-sample.jpg";
import TestImage2 from "../../Assets/img/product2.webp";
import { Languages } from "./Languages";
import { Frameworks } from "./Frameworks";
import { Libraries } from "./Libraries";
import { Bundlers } from "./Bundlers";
import { Api } from "./Api";
import { Cms } from "./CMS";
import { Compilers } from "./Compilers";
import { CssInJs } from "./CssInJs";
import { Linters } from "./Linters";
import { PackageManagers } from "./PackageManagers";
import { Packages } from "./Packages";
import { Preprocessors } from "./Preprocessors";
import { QueryLanguages } from "./QueryLanguages";
import { Runtimes } from "./Runtimes";
import { SSG } from "./SSG";
import { TaskRunners } from "./TaskRunners";
import { Testing } from "./Testing";
import { VersionControl } from "./VersionControl";

import * as Styled from "./styled";

export const Toolkit: React.FC = memo(() => {
  const [chosenCategory, setChosenCategory] = useState("languages");
  const categoryClickHandler = (e: React.MouseEvent): void => {
    const { id } = e.target as HTMLDivElement;
    setChosenCategory(id);
  };
  return (
    <Styled.Container>
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
      <Styled.CategoryContentWrapper>
        <Styled.Content>
          {chosenCategory === "languages" && <Languages />}
          {chosenCategory === "frameworks" && <Frameworks />}
          {chosenCategory === "libraries" && <Libraries />}
          {chosenCategory === "bundlers" && <Bundlers />}
          {chosenCategory === "compilers" && <Compilers />}
          {chosenCategory === "formatters and linters" && <Linters />}
          {chosenCategory === "runtimes" && <Runtimes />}
          {chosenCategory === "testing" && <Testing />}
          {chosenCategory === "package managers" && <PackageManagers />}
          {chosenCategory === "version control" && <VersionControl />}
          {chosenCategory === "css preprocessors" && <Preprocessors />}
          {chosenCategory === "css-in-js" && <CssInJs />}
          {chosenCategory === "task runners" && <TaskRunners />}
          {chosenCategory === "static site generators" && <SSG />}
          {chosenCategory === "cms" && <Cms />}
          {chosenCategory === "query languages" && <QueryLanguages />}
          {chosenCategory === "API" && <Api />}
          {chosenCategory === "packages" && <Packages />}
        </Styled.Content>
      </Styled.CategoryContentWrapper>
    </Styled.Container>
  );
});
