import styled from "@emotion/styled";
import { themes } from "../../../../Configuration/themes";

export const Input = styled.input`
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: 11px;
  background: ${themes.main_bg};
  border: 1px solid #eee;
  border-radius: 0 0 0 5px;
  min-width: 215px;
  height: 40px;
  color: ${themes.sign_up_form_title};
  font-weight: 100;

  ::placeholder {
    color: ${themes.sign_up_form_title};
    font-weight: 100;
  }
`