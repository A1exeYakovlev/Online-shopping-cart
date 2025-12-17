import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return createPortal(<div className="overlay">{children}</div>, document.body);
}
