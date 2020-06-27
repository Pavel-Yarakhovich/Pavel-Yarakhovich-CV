import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import AngularLogo from "../../../Assets/img/angular.png";
import VueLogo from "../../../Assets/img/vue.png";
import * as Styled from "./styled";

export const Frameworks = memo(() => {
  return <Styled.Container>
    <CategoryItem name="Angular JS" description="Test description" logo={AngularLogo}/>
    <CategoryItem name="Vue JS" description="Test description" logo={VueLogo}/>
  </Styled.Container>;
});
