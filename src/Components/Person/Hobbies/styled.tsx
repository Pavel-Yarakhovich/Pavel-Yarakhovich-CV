import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: 550px) {
    flex-flow: column;
  }
`;
