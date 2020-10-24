import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  background: linear-gradient(160deg,rgb(222,242,252),#fff);
  display: flex;
  flex-direction: column;
  jusify-content: center;

  @media (max-width: 350px) {
    width: 100%;
  }
`;

export const Menu = styled.ul`
  width: 100%;
  flex-shrink: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
`;

export const MenuItem = styled.li`
  // height: 100%;
  padding: 1.5em;
  margin: 0;
  font-size: 1em;
  display: flex;
  align-items: center;
  text-align: center;

  span {
    color: ${themes.scroll_thumb_hovered};

    :hover {
      color: ${themes.scroll_thumb};
      cursor: pointer;
    }
  }
`;
