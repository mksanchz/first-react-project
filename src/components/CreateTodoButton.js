import React from 'react';
import '../css/CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button className={`CreateTodoButton ${props.openModal && 'CreateTodoButton-modal-active'}`}
                onClick={onClickButton}>
            +
        </button>
    );
}

export {CreateTodoButton};