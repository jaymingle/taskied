import './App.css'
import React, {useState} from "react";
import InputField from "./components/InputField.tsx";

const App: React.FC = () => {

    const [todo, setTodo] = useState<string>('')

    console.log(todo)

  return (
    <div className="App">
        <span className="heading">Taskied</span>
        <InputField todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App
