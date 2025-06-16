import { useEffect, useRef } from "react";

const PopupMessage = ({
  show,
  onConfirm,
  title = "Confirm Action",
  body = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  const modalRef = useRef();

  useEffect(() => {
    const modal = new window.bootstrap.Modal(modalRef.current);

    if (show) {
      modal.show();
    } else {
      modal.hide();
    }

    // Optional: return cleanup
    return () => modal.hide();
  }, [show]);

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      ref={modalRef}
      aria-labelledby="popupMessageTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="popupMessageTitle">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{body}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              {cancelText}
            </button>
            <button type="button" className="btn btn-primary" onClick={onConfirm}>
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
