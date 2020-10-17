import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 300px;
  box-sizing: border-box;
  padding: 20px 0;
`

export const Content = styled.div`
  margin: 0 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-flow: column;
  }

  @media (max-width: 1000px) {
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
  }
`

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`