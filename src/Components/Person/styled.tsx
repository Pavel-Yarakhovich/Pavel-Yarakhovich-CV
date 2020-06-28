import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  box-sizing: border-box;
  background: ${themes.header_bg};
`

export const Content = styled.div`
  margin: 30px 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    margin: 15px;
  }
`

export const CentralBlock = styled.div`
  width: 100%;
  height: 100%;
  background: salmon;
`