import React, { memo } from 'react';
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

interface Props {
  chosenCategory: string;
}

export const ToolkitCategoryContent: React.FC<Props> = memo((props) => {
  const { chosenCategory } = props;
  return (
    <Styled.CategoryContentWrapper>
      <Styled.Wrapper>
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
      </Styled.Wrapper>
    </Styled.CategoryContentWrapper>
  );
});
