import styled from "@emotion/styled";

export const Container = styled.div`
  height: 300px;
  border: 2px solid salmon;
  box-sizing: border-box;
`

export const Content = styled.div`
  margin: 30px 100px;

  @media (max-width: 1000px) {
    margin: 15px;
  }
`