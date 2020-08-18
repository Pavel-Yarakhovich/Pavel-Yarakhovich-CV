import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const CategoryContentWrapper = styled.div`
  background: ${themes.header_bg};
`;

export const Content = styled.div`
  margin: 30px 100px;

  @media (max-width: 1000px) {
    margin: 15px 15px 15px 55px;
  }
`;
