import Modal from 'react-modal';
import {useState} from "react";
import {FaRegCircleXmark} from "react-icons/fa6";
// Modal.setAppElement('#root');

export default function md({isOpen = false, onClose, title = "", children}) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);

    function closeModal() {
        if (onClose && typeof onClose === "function") onClose();
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{title}</span>
                <FaRegCircleXmark className="cursor-pointer" onClick={closeModal}/>
            </div>
            {children}
        </Modal>
    );
}