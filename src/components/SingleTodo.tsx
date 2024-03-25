import React from 'react';
import './styles.css'
import Todo from "../model.ts";
import {AiFillEdit, AiFillDelete, AiFillCheckSquare,} from 'react-icons/ai'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {

    const handleDone = (id: number) => {
        // console.log(id)
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        )

    }

    return (
        <form className="todos_single">
            <span className="todos_single--text">{todo.todo}</span>
            <div>
                <span className="icon"><AiFillEdit/></span>
                <span className="icon"><AiFillDelete/></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><AiFillCheckSquare/></span>
            </div>
        </form>
    );
};

export default SingleTodo;
