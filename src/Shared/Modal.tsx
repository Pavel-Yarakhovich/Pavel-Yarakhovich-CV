import React from "react";
import { Transition } from "react-transition-group";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import styled from "@emotion/styled";
import { themes } from "../Configuration/themes";

interface ModalProps {
  isOpen: boolean;
  children: any;
  handleClose: () => void;
}

export const Modal = ({ isOpen, children, handleClose }: ModalProps) => {
  return (
    <Transition
      in={isOpen}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 0,
      }}
    >
      {(state) => (
        <Backdrop
          style={{
            ...container,
            ...containerTrans[state],
          }}
        >
          <Container >
            <Close fontSize="large" onClick={handleClose}/>
            {children}
          </Container>
        </Backdrop>
      )}
    </Transition>
  );
};

const Backdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, .3);
`;

const Container = styled.div`
  width: 1000px;
  height: 80vh;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${themes.header_bg};
  border-radius: 6px;
  box-shadow: 0 0 20px ${themes.scroll_thumb};
  padding: 0 1.5rem 1.5rem;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

const Close = styled(CloseRoundedIcon)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${themes.scroll_thumb};

  :hover {
    cursor: pointer;
    color: ${themes.scroll_thumb_hovered};
  }
`;

const container = {
  opacity: 0,
  transform: "scale(0)",
  transformOrigin: "center",
  transition: "all 300ms ease-out",
};
const containerTrans = {
  entering: {
    opacity: 0,
    transform: "scale(0)",
  },
  entered: { opacity: 1, transform: "scale(1)" },
  exiting: {
    opacity: 0,
    transform: "scale(0)",
  },
  exited: {
    opacity: 0,
    transform: "scale(0)",
  },
  unmounted: {},
};
