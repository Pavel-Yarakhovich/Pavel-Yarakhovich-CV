import styled from "@emotion/styled";
import { themes } from "../../../../Configuration/themes";

export const Input = styled.input`
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: 13px;
  background: ${themes.header_bg};
  border: 1px solid ${themes.sign_up_form_text};
  border-radius: 5px;
  min-width: 215px;
  height: 40px;
  color: ${themes.sign_up_form_title};
  font-weight: 100;
  margin-bottom: 1rem;

  ::placeholder {
    color: ${themes.sign_up_form_text};
    font-weight: 100;
  }
`