import styled from "@emotion/styled";
import { themes } from "../../Configuration/themes";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  // border-bottom: 1px solid ${themes.scroll_thumb};

  :hover {
    cursor: pointer;
  }
`;

export const Name = styled.h3`
  font-size: 16px;
  color: ${themes.item_name};
  transition: all 250ms ease;

  :hover {
    color: ${themes.button_hover};
  }
`;

export const Description = styled.div`
  position: relative;
  font-size: 14px;
  color: ${themes.sign_up_form_text};
  padding-bottom: 45px;

  p {
    text-indent: 30px;
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  object-position: center center;
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ToggleButton = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 20px;
  padding: 0;
  border: 0;
  background: 0;
  color: ${themes.scroll_thumb};
  transition: color 250ms ease;

  :hover {
    cursor: pointer;
    color: ${themes.button_hover};
  }
`;

export const LinkToDocs = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding: 0 30px 12px 0;

  a {
    color: ${themes.link};
    margin: 0;
    padding: 0 12px;
  }
`;

export const OuterLinkSign = styled.div`
  position: absolute;
  right: 10px;
  top: -5px;
  color: ${themes.link};
`;

export const Border = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: ${themes.scroll_thumb};
`;

export const InfoGraphic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChartContainer = styled.div`
  flex: 100px 0 0;
  height: 170px;
  position: relative;
`;