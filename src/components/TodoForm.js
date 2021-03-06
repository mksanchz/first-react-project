import React from "react";
import '../css/TodoForm.css';

function TodoForm({addTodo, setOpenModal}) {
    const [newTodoValue, setTodoValue] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Type your new TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="My new TODO"/>
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button"
                    onClick={onCancel}>Cancel
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit">Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};