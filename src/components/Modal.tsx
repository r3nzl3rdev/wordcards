import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-75 z-50 overflow-scroll"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md h-fit shadow-lg w-full max-w-lg mx-4 relative mt-20 md:mt-40 lg:mt-60 mb-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center bg-green-primary w-full rounded-t py-2 px-3">
          {title && (
            <h2 className="text-xl font-semibold text-white">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="text-white px-2 rounded lg:hover:bg-white hover:text-red-400 text-[14px] font-bold"
          >
            {/* <i className="fa-solid fa-x"></i> */}
            &times;
          </button>
        </div>
        <div className="py-2 px-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
