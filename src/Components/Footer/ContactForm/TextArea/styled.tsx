import styled from "@emotion/styled";
import { themes } from "../../../../Configuration/themes";

export const Input = styled.textarea`
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: 11px;
  font-family: inherit;
  background: ${themes.main_bg};
  border: 1px solid #eee;
  border-radius: 5px 5px 0 0;
  min-width: 215px;
  max-width: 296px;
  color: ${themes.sign_up_form_title};
  opacity: 1;
  font-weight: 100;

  ::placeholder {
    color: ${themes.sign_up_form_title};
    opacity: 1;
    font-weight: 100;
  }
`