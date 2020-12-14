import styled from '@emotion/styled';
import { themes } from '../../Configuration/themes';

export const Container = styled.div`
  // flex-basis: 50%;
  // justify-self: flex-end;
  // margin-left: auto;
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Buttons = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  font-size: 1rem;

  @media (max-width: 510px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 460px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 410px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 300px;
  }
`;

export const Self = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonLeftTop = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: calc(50% - 5px);
  height: calc(50% - 5px);
  background: url('/img/leftTop.svg') no-repeat center;
  background-size: contain;
  opacity: .3;
  transition: all 250ms ease;
  display: flex;
  align-items: flex-start;

  span {
    padding: 1rem;
  }

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const LTIcon = styled.button`
  position: absolute;
  z-index: 10;
  // top: 0;
  // left: 0;
  width: 80px;
  height: 80px;
  border: none;
  background: url('/img/toolkit.svg') no-repeat center;
  background-color: ${themes.header_bg};
  background-size: cover;
  border-radius: 50% 50% 0 50%;
  box-shadow: 0 0 25px ${themes.scroll_thumb};

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;

export const ButtonLeftBottom = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  bottom: 0;
  width: calc(50% - 5px);
  height: calc(50% - 5px);
  background: url('/img/leftBottom.svg') no-repeat center;
  background-size: contain;
  opacity: .3;
  transition: all 250ms ease;
  display: flex;
  align-items: flex-end;

  span {
    padding: 1rem;
  }

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const LBIcon = styled.button`
  position: absolute;
  z-index: 10;
  // bottom: 0;
  // left: 0;
  width: 80px;
  height: 80px;
  border: none;
  background: url('/img/github.svg') no-repeat center;
  background-color: ${themes.header_bg};
  background-size: cover;
  border-radius: 50% 0 50% 50%;
  box-shadow: 0 0 25px ${themes.scroll_thumb};

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;

export const ButtonRightTop = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: calc(50% - 5px);
  height: calc(50% - 5px);
  background: url('/img/rightTop.svg') no-repeat center;
  background-size: contain;
  opacity: .3;
  transition: all 250ms ease;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  span {
    padding: 1rem;
  }

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const RTIcon = styled.button`
  position: absolute;
  z-index: 10;
  // top: 0;
  // right: 0;
  width: 80px;
  height: 80px;
  border: none;
  background: url('/img/work-experience.svg') no-repeat center;
  background-color: ${themes.header_bg};
  background-size: cover;
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 0 25px ${themes.scroll_thumb};

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;

export const ButtonRightBottom = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  bottom: 0;
  width: calc(50% - 5px);
  height: calc(50% - 5px);
  background: url('/img/rightBottom.svg') no-repeat center;
  background-size: contain;
  opacity: .3;
  transition: all 250ms ease;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  span {
    padding: 1rem;
  }

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const RBIcon = styled.button`
  position: absolute;
  z-index: 10;
  // bottom: 0;
  // right: 0;
  width: 80px;
  height: 80px;
  border: none;
  background: url('/img/learning.svg') no-repeat center;
  background-color: ${themes.header_bg};
  background-size: cover;
  border-radius: 0 50% 50% 50%;
  box-shadow: 0 0 25px ${themes.scroll_thumb};

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;