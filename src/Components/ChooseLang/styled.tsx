import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px;

  @media (max-width: 768px) {
    flex-flow: row;
  }
`

export const Flag = styled.img`
  width: 26px;
  height: 15px;
  object-fit: cover;
  object-position: center;
  margin: .25em;
  opacity: ${props => props.selected ? 1 : 0.6};
  box-shadow: 0 0 4px ${props => props.selected ? 'blue' : 'lightgrey'};
  transition: all 250ms ease;
  :hover {
    cursor: pointer;
  }
`