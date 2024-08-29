import React from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";

const ModalCard = ({ openModal, modalTitle, modalDescription, onClose }) => {

  if (!openModal) return null;

  return (
    <div className="fixed inset-0 bg-black-700 bg-opacity-85 flex justify-center items-center z-50">
      <div className="h-4/5 w-96 sm:w-4/5 m-3 bg-white dark:bg-black-500 p-6 rounded-lg shadow-lg relative overflow-y-auto">
        <button
          className="absolute top-5 right-5 h-5 w-5 text-gray-600 dark:text-gray-200 text-3xl"
          onClick={onClose}
        >
          <IoCloseCircleSharp />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold dark:text-white mt-5">{modalTitle}</h2>
          <div
            className="mt-10 dark:text-gray-300 text-justify"
            dangerouslySetInnerHTML={{ __html: modalDescription }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
