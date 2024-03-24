import './App.css'
import React, {useState} from "react";
import InputField from "./components/InputField.tsx";
import {Todo} from "./model.ts";

const App: React.FC = () => {

    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        console.log(todo)

        if(todo){
            setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
        }
        console.log(todos)

        setTodo('')
    }

  return (
    <div className="App">
        <span className="heading">Taskied</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  )
}

export default App
