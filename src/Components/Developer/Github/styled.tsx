import styled from "@emotion/styled";
import { themes } from '../../../Configuration/themes';

export const Wrapper = styled.div`
  width: 100%;
  // max-height: 100%;
  flex-grow: 1;
  overflow: auto;
  display: flex;
  padding: 1.5em 0.5em 0.5em;
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
  @media (max-width: 1280px) {
    width: 100%;
    padding: 1.5em 0 0;
  }
`;

export const Container = styled.div`
  flex-flow: column;
  width: 100%;
`;

export const SelfDescription = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 1em;
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Name = styled.span`
  font-size: 1.15em;
  font-weight: 600;
  letter-spacing: 0.03rem;
`;

export const Bio = styled.p`
  font-size: 1em;
`;

export const Location = styled(Bio)`
  margin-top: 0;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
`;
