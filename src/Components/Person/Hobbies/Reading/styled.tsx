import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 50%;
  height: 250px;
  padding: 1em;
  box-sizing: border-box;

  @media (max-width: 550px) {
    width: 100%;
    padding: .5em;
  }
`

export const Container = styled.div`
  border: 1px solid brown;
  width: 100%;
  height: 100%;
`