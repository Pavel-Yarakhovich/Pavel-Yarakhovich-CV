import styled from "@emotion/styled";
import { themes } from "../../../Configuration/themes";

export const Wrapper = styled.div`
  flex: 1 0 160px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  transition: all 250ms ease;

  :hover {
    background: linear-gradient(${themes.main_bg}, ${themes.header_bg});
    cursor: pointer;
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