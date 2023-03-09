import Titulo from "./Titulo";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root');

function HeadContent(props) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true)
    };

    function handleCloseModal() {
        setIsOpen(false)
    };

    const customStyles = {
        content: {
            width: '50%',
            height: '50%',
            margin: 'auto',
            backgroundColor: '#252525',
            color: '#f5f5f5',
            borderRadius: '15px',
        },
    }

    return (
        <>
            <div id="content" className="flex flex-row items-center">
                <Titulo name={props.name} />
                <button onClick={handleOpenModal} className="mt-10 mx-5 w-12 h-12 rounded-3xl text-[#f5f5f5] text-2xl bg-[#D9D9D9] bg-opacity-[0.5]">
                    +
                </button>
            </div>

            <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                <Titulo name={"Post new photo"} />
                <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs" />

                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            </Modal>
        </>
    );
}

export default HeadContent;