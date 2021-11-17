import React from "react";
import '../css/TodoCounter.css';
import {TodoContext} from "../context";

function TodoCounter() {
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext);

    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};