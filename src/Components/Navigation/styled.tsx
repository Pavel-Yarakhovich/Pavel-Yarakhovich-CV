import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Navigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Menu = styled.ul`
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
`

export const MenuItem = styled.li`
  height: 100%;
  padding: 0 1.5em;
  margin: 0;
  font-size: 1em;
  display: flex;
  align-items: center;
  text-align: center;

  a {
    color: ${themes.scroll_thumb_hovered};

    :visited,
    :active {
      color: ${themes.scroll_thumb};
    }
  }
`