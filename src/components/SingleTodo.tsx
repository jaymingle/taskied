import React, {useState, useRef, useEffect} from 'react';
import './styles.css'
import Todo from "../model.ts";
import {AiFillEdit, AiFillDelete, AiFillCheckSquare,} from 'react-icons/ai'
import {Draggable} from "react-beautiful-dnd";

type Props = {
    index: number
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({index, todo, todos, setTodos}:Props) => {

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

    const handleEditForm = (e: React.FormEvent<EventTarget>, id: number): void => {
        e.preventDefault()

        setTodos(todos.map(todo => todo.id === id ? {...todo, todo: editTodo} : todo))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
            inputRef.current?.focus()
        },[edit])

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {() => (
                <form className="todos_single" onSubmit={e => handleEditForm(e, todo.id)}>
                    {
                        edit ? (
                            <input ref={inputRef} value={editTodo}  onChange={(e) => setEditTodo(e.target.value)} className="todos_edit_input"/>
                        ) : todo.isDone ? (
                            <s className="todos_single--text">{todo.todo}</s>
                        ) : (
                            <span className="todos_single--text">{todo.todo}</span>
                        )}

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
            )}
        </Draggable>

    );
};

export default SingleTodo;
