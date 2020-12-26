import styled from "@emotion/styled";
import { themes } from "../../../Configuration/themes";

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  padding: .5em;
  @media (max-width: 1280px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const Experience = styled.div`
  max-height: calc(80vh - 10rem);
  flex-grow: 1;
  overflow: auto;
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

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const Toggler = styled.button`
  border: none;
  background: none;
  font-size: inherit;
  font-weight: inherit;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  color: ${props => props.active ? 'rgba(37, 128, 199, .9)' : 'inherit'};
`;
