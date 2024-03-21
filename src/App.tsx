import './App.css'

function App() {

    const projectOwnerName = 'John'
    const projectOwnerAge = Math.floor(Math.random() * 100) + 1

  return (
    <>
        <p>The name of the project owner is {projectOwnerName}</p>
        <p>The Project Number is {projectOwnerAge} years old</p>
        <h1>Hello World</h1>
    </>
  )
}

export default App
