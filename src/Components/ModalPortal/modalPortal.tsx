import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../Shared/Modal";
import ServiceAction from "../../Store/service/serviceAction";

const container = document.getElementById("modal");

export const ModalPortal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.service.isModalOpen);
  const element = document.createElement("div");

  useEffect((): any => {
    if (container && element) {
      container.appendChild(element);
      return () => container.removeChild(element);
    }
  }, [element]);

  return (
    isModalOpen &&
    createPortal(
      <Modal
        isOpen={isModalOpen}
        handleClose={() => dispatch({ type: ServiceAction.CLOSE_MODAL })}
      >
        Content
      </Modal>,
      element
    )
  );
};
