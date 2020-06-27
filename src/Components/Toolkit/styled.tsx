import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
`

export const CategoryWrapper = styled.div`
  height: 170px;
  background: ${themes.header_bg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: auto;

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
`