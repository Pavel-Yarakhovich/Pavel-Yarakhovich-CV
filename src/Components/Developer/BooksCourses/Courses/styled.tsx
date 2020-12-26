import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  box-sizing: border-box;


  @media (max-width: 1280px) {
    // align-items: center;
  }
`;

export const Logo = styled.img`
  width: 160px;
  max-width: 30vw;
  height: 120px;
  object-fit: contain;
  object-position: center top;
  margin-right: 15px;
  box-shadow: 0 0 15px lightgrey;
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
`

export const Position = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: .5rem;
`

export const CompanyName = styled.span`
  letter-spacing: .04rem;
  margin-bottom: .3rem;
`

export const School = styled(CompanyName)`
  color: #d9655d;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: .03rem;
`

export const Period = styled.span`
  font-weight: 100;
  margin-bottom: .3rem;
`

export const Book = styled.div`
  display: flex;
  padding: .5rem;
`