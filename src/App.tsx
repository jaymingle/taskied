import './App.css'
import React, {useState} from "react";
import InputField from "./components/InputField.tsx";
import Todo from "./model.ts";
import TodoList from "./components/TodoList.tsx";
import {DragDropContext} from "react-beautiful-dnd";


const App: React.FC = () => {

    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        console.log('Todo Entered', todo)

        if(todo){
            setTodos([...todos, {id: Date.now(), todo, isDone: false}])
        }
        console.log( 'Todo Lists: ',todos)

        setTodo('')
    }

    return (
    <DragDropContext onDragEnd={() => {}}>
        <div className="App">
            <span className="heading">Taskied</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            <TodoList
                todos={todos}
                setTodos={setTodos}
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
            />
        </div>
    </DragDropContext>
  )
}

export default App
