import React from 'react';
import './styles.css'
import Todo from "../model.ts";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({todo, todos, setTodos}:Props) => {
    return (
        <form className="todos_single">
            <span className="todos_single--text">
                {todo.todo}
            </span>
        </form>
    );
};

export default SingleTodo;
