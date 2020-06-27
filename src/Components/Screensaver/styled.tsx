import styled from "@emotion/styled";
import Bg from "../../Assets/img/screensaver.webp";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  margin-top: 75px;
  position: relative;
  flex-grow: 1;
  background: ${themes.main_bg};
  background-size: cover;
`