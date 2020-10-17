import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  padding: .5em;
  @media (max-width: 1280px) {
    width: 100%;
    height: 250px;
  }
`;

export const Container = styled.div`
  width: 100%;
  flex-flow: column;
  border: 1px solid blue;
`;
