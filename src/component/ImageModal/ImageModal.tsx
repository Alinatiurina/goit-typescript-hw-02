import Modal from 'react-modal';
import css from "./ImageModal.module.css";
import React, { FC } from "react";

interface ImageModalProps {
    image: string | null;
    imgModal: boolean;
    onModalClose: () => void;
}

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

const ImageModal: FC<ImageModalProps> = ({ image, imgModal, onModalClose }) => {
    return (
        <Modal isOpen={imgModal} onRequestClose={onModalClose} style={customStyles}>
            <div className={css.modalContent}>
                <button className={css.closeButton} onClick={onModalClose}>Close</button>
                {image && <img src={image} alt="modal" className={css.modalImage} />}
            </div>
        </Modal>
    );
}

export default ImageModal;