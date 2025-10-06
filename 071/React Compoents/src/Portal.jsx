import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = () => {
  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <h3>This is a modal rendered using Portal</h3>
      <button onClick={() => alert("Modal closed!")}>Close Modal</button>
    </div>,
    document.body
  );
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "8px",
  zIndex: 1000,
};

export default ModalPortal;
