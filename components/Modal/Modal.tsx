import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const handleBackdroupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydropClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeydropClick);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeydropClick);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdroupClick}
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
