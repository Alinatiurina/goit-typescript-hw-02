import Modal from 'react-modal';
import css from "./ImageModal.module.css";
import React from "react";
import { Img } from '../../types';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff", 
    borderRadius: "8px", 
    border: "none", 
    padding: "20px", 
    maxHeight: "80vh" 
  }
};

interface ModalWindowProps {
    image: Img | null;
    imgModal: boolean;
    onModalClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const ImageModal: React.FC<ModalWindowProps> = ({ image, imgModal, onModalClose, onNext, onPrev }) => {
  if (!image) {
    return null;
  }

  return (
    <Modal isOpen={imgModal} onRequestClose={onModalClose} style={customStyles}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onModalClose}>
          <FaTimes />
        </button>
        <button className={css.prevButton} onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage} />
        <button className={css.nextButton} onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
