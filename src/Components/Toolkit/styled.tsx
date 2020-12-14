import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  background: ${themes.header_bg};
  flex-shrink: 0;
`

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const CategoryWrapper = styled.div`
  height: 15vh;
  min-height: 70px;
  max-height: 100px;
  background: ${themes.header_bg};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  box-sizing: border-box;
  overflow-x: auto;

  scrollbar-color: ${themes.scroll_thumb} transparent;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 8px;
    height: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(156, 156, 156, .25);
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