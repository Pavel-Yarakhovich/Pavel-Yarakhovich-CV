import styled from "@emotion/styled";
import { themes } from "../../../Configuration/themes";
import LinkedinLogo from "../../../Assets/img/linkedin.png";
import GithubLogo from "../../../Assets/img/github.png";

export const Container = styled.div`
  margin: 1em auto;
  padding: .5em;
  border-top: 1px solid ${themes.sign_up_form_text};
  border-bottom: 1px solid ${themes.sign_up_form_text};
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Linkedin = styled.a`
  width: 20px;
  height: 20px;
  margin: 0 1em;
  background: url(${LinkedinLogo}) no-repeat center center;
  background-size: contain;
  transition: all 250ms ease;
  :hover {
    background-color: ${themes.button_hover};
  }
`

export const Github = styled(Linkedin)`
  background-image: url(${GithubLogo});
  border-radius: 50%;
`

export const PhoneNumber = styled.a`
  text-decoration: none;
  color: ${themes.sign_up_form_title};
  transition: color 250ms ease;
  :hover {
    color: ${themes.button_hover};
  }
`