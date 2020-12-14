import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    padding: 1rem;
    align-items: center;
    background: rgba(245, 249, 255, 0.5);
  }
`;

export const Hello = styled.h2`
  font-size: 2rem;
  align-self: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.06rem;

  span {
    font-weight: 400;
    letter-spacing: 0;
  }

  span:first-child {
    top: -12px;
  }
`;

export const Job = styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  max-width: 320px;
  align-self: center;
  padding: 1rem 0;
  margin-bottom: 0;
  text-align: center;
`;

export const CV = styled.div`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;
