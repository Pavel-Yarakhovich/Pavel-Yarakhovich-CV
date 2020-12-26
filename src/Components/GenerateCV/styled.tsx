import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 9px 6px 12px rgba(0, 0, 0, 0.2), -3px -3px 16px rgba(0, 0, 0, 0.12),
      0px 9px 12px rgba(0, 0, 0, 0.14);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.25);
`;

export const ShowCv = styled.button`
  min-width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 40px;
  border: none;
  font-size: 2rem;
  background: ${themes.main_bg};
  color: rgba(37, 128, 199, .9);
  box-shadow: 0 0 80px 1px rgba(57, 148, 219, .3), inset 0 0 3px #3994DB;
  transition: all 250ms ease;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 50px 1px #267;
    color: #933;
    font-size: 2.1rem;
  }
`

export const Loader = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-fit: center;
  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }

  animation: rotate 1s linear infinite;
`;

export const PrepareCv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Preview = styled.a`
  width: 100%;
  height: 30px;
  border-radius: 15px 15px 0 0;
  background-color: #c28e00;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-sapcing: .03rem;
  margin: 0 0 4px;
`;

export const Download = styled(Preview)`
  border-radius: 0 0 15px 15px;
  background-color: #103d78;
  margin: 4px 0 0;
`;

export const Close = styled.button`
  position: absolute;
  z-index: 12;
  top: 5px;
  right: -30px;
  width: 20px;
  height: 20px;
  background: url('/img/cross.svg') no-repeat center;
  background-size: cover;
  border: none;
  opacity: .7;
  transition: all 250ms ease;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;
