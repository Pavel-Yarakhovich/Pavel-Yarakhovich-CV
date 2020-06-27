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
    <CategoryItem name="React JS" description="Test description" logo={ReactLogo}/>
    <CategoryItem name="React-router" description="Test description" logo={RouterLogo}/>
    <CategoryItem name="Redux" description="Test description" logo={ReduxLogo}/>
    <CategoryItem name="React-transition-group" description="Test description" />
    <CategoryItem name="Apollo" description="Test description" logo={ApolloLogo}/>
    <CategoryItem name="Moment JS" description="Test description" logo={MomentLogo}/>
    <CategoryItem name="React i18n" description="Test description" logo={I18nLogo}/>
    <CategoryItem name="Express" description="Test description" logo={ExpressLogo}/>
    <CategoryItem name="Axios" description="Test description" logo={AxiosLogo}/>
    <CategoryItem name="Vis.js" description="Test description" logo={VisLogo}/>
  </Styled.Container>;
});
