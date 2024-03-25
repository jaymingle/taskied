import React, {useState} from 'react';
import './styles.css'
import Todo from "../model.ts";
import {AiFillEdit, AiFillDelete, AiFillCheckSquare,} from 'react-icons/ai'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        )
    }

    const handleDelete = (id: number) => {
        console.log('delete', id)
        setTodos(
            todos.filter(todo => todo.id !==  id)
        )
    }

    return (
        <form className="todos_single">

            {
                edit ? (
                   <input value={editTodo}  onChange={(e) => setEditTodo(e.target.value)} className="todos_edit_input"/>
                ) : (
                    ''
                )
            }

            <span className={`todos_single--text ${todo.isDone ? 'strikethrough' : ''}`}>{todo.todo}</span>
            <div>
                <span className="icon" onClick={
                        () => {
                        if(!edit && !todo.isDone) {
                            setEdit(!edit)
                         }
                    }
                }
                ><AiFillEdit/></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><AiFillCheckSquare/></span>
            </div>
        </form>
    );
};

export default SingleTodo;
