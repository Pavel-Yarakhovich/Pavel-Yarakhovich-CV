import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  padding-right: 2rem;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 450px) {
    width: 100%;
    padding: 10px;
    align-items: center;
    background: rgba(245, 249, 255, .5);
  }
`

export const Hello = styled.h2`
  font-size: 2rem;
  align-self: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
`

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: .06rem;

  span {
    font-weight: 400;
    letter-spacing: 0;
  }

  span:first-child {
    top: -12px;
  }
`

export const Job = styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  max-width: 320px;
  align-self: center;
  padding: 1rem 0;
  margin-bottom: 0;
  text-align: center;
`