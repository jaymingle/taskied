import './App.css'
import React from "react";
import InputField from "./components/InputField.tsx";

const App: React.FC = () => {

  return (
    <div className="App">
        <span className="heading">Taskied</span>
        <InputField/>
    </div>
  )
}

export default App
