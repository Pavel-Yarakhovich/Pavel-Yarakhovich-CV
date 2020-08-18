import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import ReactLogo from "../../../Assets/img/react.png";
import ReduxLogo from "../../../Assets/img/redux.png";
import ApolloLogo from "../../../Assets/img/apollo.svg";
import MomentLogo from "../../../Assets/img/moment.png";
import I18nLogo from "../../../Assets/img/i18n.png";
import ExpressLogo from "../../../Assets/img/express.png";
import AxiosLogo from "../../../Assets/img/axios.png";
import VisLogo from "../../../Assets/img/vis.png";
import RouterLogo from "../../../Assets/img/router.png";
import * as Styled from "./styled";

export const Libraries = memo(() => {
  return <Styled.Container>
    <CategoryItem name="React JS" description="Test description" logo={ReactLogo} knowledgeQuality={85}/>
    <CategoryItem name="React-router" description="Test description" logo={RouterLogo} knowledgeQuality={90}/>
    <CategoryItem name="Redux" description="Test description" logo={ReduxLogo} knowledgeQuality={80}/>
    <CategoryItem name="React-transition-group" description="Test description"  knowledgeQuality={95}/>
    <CategoryItem name="Apollo" description="Test description" logo={ApolloLogo} knowledgeQuality={45}/>
    <CategoryItem name="Moment JS" description="Test description" logo={MomentLogo} knowledgeQuality={70}/>
    <CategoryItem name="React i18n" description="Test description" logo={I18nLogo} knowledgeQuality={75}/>
    <CategoryItem name="Express" description="Test description" logo={ExpressLogo} knowledgeQuality={30}/>
    <CategoryItem name="Axios" description="Test description" logo={AxiosLogo} knowledgeQuality={80}/>
    <CategoryItem name="Vis.js" description="Test description" logo={VisLogo} knowledgeQuality={45}/>
  </Styled.Container>;
});
