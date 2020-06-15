import React, { memo } from "react";
import * as Styled from "./styled";

export const Header: React.FC<{notification: String}> = memo(( props ) => {
  const { notification } = props;
  return <Styled.Wrapper>
    
    <Styled.Notification>{notification}</Styled.Notification>
  </Styled.Wrapper>;
});
