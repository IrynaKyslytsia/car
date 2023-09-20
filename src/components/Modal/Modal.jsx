import { useEffect } from "react";
import { createPortal } from 'react-dom';
import { Backdrop, BattonClose, ModalWindow } from "./Modal.styled";
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from "react-icons";
import DetailedInfo from "../DetailedInfo/DetailedInfo";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, onOpen, carDetails }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    });

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            onClose();
            };
        };

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose()
        };
    };
    
        return createPortal(
            <Backdrop onClick={handleBackdropClick}>
                <ModalWindow>
                    <IconContext.Provider value={{ size: '24px' }}>
                        <BattonClose onClick={onClose}>
                            <AiOutlineClose />
                        </BattonClose>
                    </IconContext.Provider>
                    <DetailedInfo
                        carDetails={carDetails}
                        onOpen={onOpen}/>
                </ModalWindow>
            </Backdrop>,
            modalRoot)
    };

export default Modal;