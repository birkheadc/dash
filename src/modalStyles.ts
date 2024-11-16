import ReactModal from "react-modal";

function declareModalStyles(Modal: typeof ReactModal): void {
  Modal.defaultStyles = {
    ...Modal.defaultStyles,
    overlay: {
      ...Modal.defaultStyles.overlay,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      ...Modal.defaultStyles.content,
      padding: "0px",
      border: "none",
      backgroundColor: "transparent",
      inset: 0,
      margin: "auto",
      borderRadius: "0px",
      width: "fit-content",
      height: "fit-content",
    },
  };
}

export default declareModalStyles;
