import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import JWTLogo from "../../../Assets/img/jwt.png";
import VirtualizedLogo from "../../../Assets/img/virtualized.png";
import * as Styled from "./styled";

export const Packages = memo(() => {
  return <Styled.Container>
    <CategoryItem name="JSON Web Token" description="Test description" logo={JWTLogo}/>
    <CategoryItem name="Recharts" description="Test description" />
    <CategoryItem name="React-virtualized" description="Test description" logo={VirtualizedLogo}/>
  </Styled.Container>;
});
