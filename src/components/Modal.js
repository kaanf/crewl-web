import React, { useRef } from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const scrollable = useRef(null);
  const customStyles = {
    overlay: {
       backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)'
    },
    modal: {
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.2)"],
    position: "relative",
    padding: "1rem",

    "@media (min-width: 576px)": {
      width: "32rem"
    },

    "@media (max-width: 480px)" :{
      height: "100px"
    } ,

    "& p:last-of-type": {
      marginBottom: 0
    }
  },
 }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    
      onClick={onClose}
    >
      <div
        className="w-[600px]  flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-lg bg-neutral-50 text-neutral-900 shadow">
          <div className=" justify-end ">
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
