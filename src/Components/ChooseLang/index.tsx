import React, { memo } from "react";
import Eng from "../../Assets/img/eng.jpg";
import Rus from "../../Assets/img/rus.png";
import * as Styled from "./styled";

export const ChooseLang = memo(() => {
  return (
    <Styled.Container>
      <Styled.Flag src={Eng} />
      <Styled.Flag src={Rus} />
    </Styled.Container>
  );
});
