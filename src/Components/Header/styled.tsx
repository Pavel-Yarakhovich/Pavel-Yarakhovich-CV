import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Logo = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  object-fit: contain;
  object-position: center;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: ${themes.header_bg};
  box-shadow: 0 2px 8px ${themes.scroll_thumb};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 50px;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Notification = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  top: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, ${themes.notification_bg} ${props => props.id}%, transparent ${props => props.id}%);
  opacity: .6;
  color: ${themes.notification_text};
  font-size: .2rem;
`

export const BurgerMenu = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  color: ${themes.scroll_thumb};
  transition: all 250ms ease;

  :hover {
    cursor: pointer;
    color: ${themes.scroll_thumb_hovered};
  }

  :focus {
    outline: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`