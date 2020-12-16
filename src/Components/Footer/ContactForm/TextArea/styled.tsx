import styled from "@emotion/styled";
import { themes } from "../../../../Configuration/themes";

export const Input = styled.textarea`
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: 13px;
  font-family: inherit;
  background: white;
  border: 1px solid ${themes.sign_up_form_text};
  border-radius: 5px 5px 0 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 150px;
  max-height: 150px;
  color: ${themes.sign_up_form_title};
  font-weight: 400;

  ::placeholder {
    color: ${themes.sign_up_form_text};
    opacity: 1;
    font-weight: 400;
  }
`