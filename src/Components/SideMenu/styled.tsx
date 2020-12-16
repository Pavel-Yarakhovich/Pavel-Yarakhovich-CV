import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  background: linear-gradient(160deg, rgb(200, 200, 215), #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;

  :before {
    position: absolute;
    z-index: 1;
    display: block;
    content: "";
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: 4px solid ${themes.header_bg};
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

export const Menu = styled.ul`
  position: relative;
  z-index: 2;
  width: 100%;
  flex-shrink: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
`;

export const MenuItem = styled.li`
  padding: 1.5em;
  margin: 0;
  font-size: 1em;
  display: flex;
  align-items: center;
  text-align: center;
  transition: all 250ms ease;

  :hover {
    font-weight: 700;
    color: ${themes.notification_bg};
    cursor: pointer;
    transform: rotateY(25deg);
    letter-spacing: .03rem;
  }
`;
