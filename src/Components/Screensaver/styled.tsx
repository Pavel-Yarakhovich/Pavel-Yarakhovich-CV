import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  margin-top: 75px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Top = styled.div`
  position: relative;
  
  // background: ${themes.main_bg};
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
