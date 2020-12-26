import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 75px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 250ms ease;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const Top = styled.div`
  position: relative;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
