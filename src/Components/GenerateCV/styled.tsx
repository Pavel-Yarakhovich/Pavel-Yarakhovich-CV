import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  position: relative;
`

export const DownloadButton = styled.button`
  position: absolute;
  top: 65px;
  right: 5px;
  padding: 5px 10px;
  font-size: 16px;
  background: #28a745;
  height: 36px;
  border-radius: 18px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 250ms ease;

  a {
    color: ${themes.notification_text};
    font-weight: 600;
    margin: 0;
  }

  :hover {
    cursor: pointer;
    background: ${themes.notification_bg};
    box-shadow: 0 0 8px #28a745;
  }

  :focus {
    box-shadow: 0 0 12px #28a745;
    outline: none;
  }
`;

export const CVSmall = styled.div`
  position: absolute;
  z-index: 2200;
  left: 50%;
  top: 45px;
`;

export const DownloadCVButton = styled.a`
  padding: 15px;
  border-radius: 15px;
  background: ${themes.main_bg};
  color: ${themes.sign_up_form_text};
  box-shadow: 0 0 0 1px ${themes.notification_bg};
`
