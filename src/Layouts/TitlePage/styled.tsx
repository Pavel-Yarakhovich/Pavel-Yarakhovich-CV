import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`

export const FirstScreen = styled.div`
  width: 1200px;
  min-height: 75vh;
  display: flex;
  flex-flow: column;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`