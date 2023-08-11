import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
 
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      style={{overflow:"scroll"}}
      onClick={onClose}
    >
      <div
        className="w-[600px] flex"
      
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
