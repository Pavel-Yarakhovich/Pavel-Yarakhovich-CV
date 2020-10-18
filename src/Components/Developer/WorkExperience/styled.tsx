import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: .5em;
  @media (max-width: 1280px) {
    width: 100%;
    margin-bottom: 20px;
    // height: 250px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const Experience = styled.div`
  // display: flex;
  // flex-flow: column;
  // overflow-X: auto;

  // @media (max-width: 1280px) {
  //   flex-flow: row;
  //   align-items: center;
  // }
`

export const Title = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 1em;
`;
