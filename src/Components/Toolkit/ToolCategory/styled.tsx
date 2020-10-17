import styled from "@emotion/styled";
import { themes } from "../../../Configuration/themes";

export const Wrapper = styled.div`
  flex: 1 0 160px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  transition: all 250ms ease;
  font-weight: ${props => props.active ? 600 : 400};
  color: ${props => props.active ? '#c98506' : 'inherit'};
  transition: all 250ms ease;

  :hover {
    background: linear-gradient(${themes.header_bg}, ${themes.main_bg});
    cursor: pointer;
    font-weight: 600;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid transparent;
  font-size: .9rem;
  margin: 0;
  letter-spacing: .02rem;
  text-align: center;
  background: url(${props => props.image}) no-repeat center;
  background-size: contain;
`

export const Image = styled.img`
  width: 160px;
  height: auto;
  object-fit: contain;
  object-position: center-center;
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`