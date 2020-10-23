import styled from "@emotion/styled";
import { themes } from "../../../../Configuration/themes";

export const Input = styled.textarea`
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: 11px;
  font-family: inherit;
  background: white;
  border: 1px solid #eee;
  border-radius: 5px 5px 0 0;
  width: 100%;
  max-width: 320px;
  color: ${themes.sign_up_form_title};
  font-weight: 100;

  ::placeholder {
    color: ${themes.sign_up_form_title};
    opacity: 1;
    font-weight: 100;
  }

  :focus {
    border: 1px solid ${themes.sign_up_form_title};
    outline: none;
  }
`