import React from 'react';
import '../css/CreateTodoButton.css';

function CreateTodoButton(props) {
    const openModal = () => {
        props.setOpenModal(true);
    };

    const closeModal = () => {
        props.setOpenModal(false);
    };

    return (
        <button className={`CreateTodoButton ${props.openModal && 'CreateTodoButton-modal-active'}`}
                onClick={!props.openModal ? openModal : closeModal}>
            +
        </button>
    );
}

export {CreateTodoButton};