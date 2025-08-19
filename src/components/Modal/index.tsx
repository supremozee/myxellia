import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: ()=>void;
}
const Modal = ({ children, isOpen, onClick }: ModalProps) => {
    if(!isOpen) return null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modalRoot:any = document.getElementById("modal-root")
  return createPortal(
      <div
        className="w-full fixed inset-0 bg-black/80 z-50 flex justify-center overflow-hidden"
        onClick={onClick}
      >
        {children}
      </div>,
      modalRoot
  );
};

export default Modal;
