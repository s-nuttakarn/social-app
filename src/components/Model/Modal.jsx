import React, { useEffect, useRef } from "react";
import style from "./modal.module.scss";
export default function Modal({
  modalStyle,
  children,
  show,
  onClose,
  backdropStyle,
  closeButton = true,
}) {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(style.visible);
    } else {
      modalRef.current.classList.remove(style.visible);
    }
  }, [show]);
  return (
    <React.Fragment>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={`${style.modal__wrap}`}
      >
        <div style={modalStyle} className={style.modal}>
          {closeButton && (
            <div className={style.close__btn__container}>
              <button
                type="button"
                onClick={onClose}
                className={style.close_btn}
              >
                <i className="fas fa-times" />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}
