import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const CategoryContentWrapper = styled.div`
  background: ${themes.header_bg};
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const Content = styled.div`
  margin: 30px 100px;

  @media (max-width: 1000px) {
    margin: 15px 15px 15px 55px;
  }
`;
