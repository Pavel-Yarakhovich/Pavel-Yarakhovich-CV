import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: ${themes.header_bg};
`

export const Notification = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  top: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themes.notification_bg};
  opacity: .6;
  color: ${themes.notification_text};
  font-size: 1rem;
`