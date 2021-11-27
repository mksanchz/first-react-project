import React from "react";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {Modal} from "./Modal";
import {TodoForm} from "./TodoForm";
import {TodosError} from "./TodosError";
import {TodosLoading} from "./TodosLoading";
import {EmptyTodos} from "./EmptyTodos";
import {TodoHeader} from "./TodoHeader";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {useTodos} from "./useTodos";
import {EmptySearchTodos} from "./EmptySearchTodos";
import {ChangeAlertWithStorageListener} from "./ChangeAlert";

function App() {
    const {
        error,
        loading,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        synchronizeTodos,
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                onError={() => <TodosError/>}
                onLoading={() => <TodosLoading/>}
                onEmpty={() => <EmptyTodos/>}
                onEmptySearch={() => <EmptySearchTodos searchValue={searchValue}/>}
                /* NOTE: here you can pass the render prop
                render={todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}*/
            >
                {/*NOTE: here can pass the render function*/}
                {todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
                </Modal>
            )}
            <ChangeAlertWithStorageListener synchronize={synchronizeTodos}/>
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}/>
        </React.Fragment>
    );
}

export default App;
