import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 33%;
  display: flex;
  padding: .5em;
  @media (max-width: 1280px) {
    width: 100%;
    height: 250px;
  }
`;

export const Container = styled.div`
  flex-flow: column;
  width: 100%;
  border: 1px solid brown;
`

export const SelfDescription = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 1em;
`

export const Info = styled.div`
  display: flex;
  flex-flow: column;
`

export const Name =  styled.span`
  font-size: 1.1em;
  font-weight: 600;
`

export const Bio = styled.p`
  font-size: 1em;
`