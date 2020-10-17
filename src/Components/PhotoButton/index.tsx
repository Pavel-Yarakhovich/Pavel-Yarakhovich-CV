import React, { memo } from 'react';
import * as Styled from "./styled";

export const PhotoButton = memo(() => {
  return (
    <Styled.Container>
      <Styled.Buttons>
        <Styled.ButtonLeftTop><span>My Toolkit</span></Styled.ButtonLeftTop>
        <Styled.ButtonRightTop><span>Me - Developer</span></Styled.ButtonRightTop>
        <Styled.ButtonLeftBottom><span>Me - Person</span></Styled.ButtonLeftBottom>
        <Styled.ButtonRightBottom><span>Contacts</span></Styled.ButtonRightBottom>

        <Styled.Self src='/img/self.jpeg' alt=''/>
      </Styled.Buttons>
    </Styled.Container>
  );
});
