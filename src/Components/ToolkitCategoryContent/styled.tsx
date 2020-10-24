import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const CategoryContentWrapper = styled.div`
  background: ${themes.header_bg};
  overflow: auto;

  scrollbar-color: ${themes.scroll_thumb} transparent;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${themes.scroll_thumb};
    border-radius: 3px;

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${themes.scroll_thumb_hovered};
    cursor: pointer;
  }

  :hover {
    scrollbar-color: ${themes.scroll_thumb_hovered} transparent;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const Content = styled.div`
  margin: 30px 100px;

  @media (max-width: 735px) {
    margin: 10px;
  }
`;
