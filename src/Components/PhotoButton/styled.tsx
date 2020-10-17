import styled from '@emotion/styled';

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
  margin: 5px;
  width: calc(50% - 10px);
  height: calc(50% - 10px);
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

export const ButtonLeftBottom = styled.div`
  margin: 5px;
  width: calc(50% - 10px);
  height: calc(50% - 10px);
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

export const ButtonRightTop = styled.div`
  margin: 5px;
  width: calc(50% - 10px);
  height: calc(50% - 10px);
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

export const ButtonRightBottom = styled.div`
  margin: 5px;
  width: calc(50% - 10px);
  height: calc(50% - 10px);
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
