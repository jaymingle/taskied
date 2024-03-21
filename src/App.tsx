import './App.css'

function App() {

    const projectOwnerName = 'John'
    const projectOwnerAge = Math.floor(Math.random() * 100) + 1
    const projectFamilies = ['John', 'Jane', 'Sergio', 'Roland', 'Sally']

  return (
    <>
        <p>The name of the project owner is {projectOwnerName}</p>
        <p>The Project Number is {projectOwnerAge} years old</p>
        <p>My family members are {projectFamilies}</p>
    </>
  )
}

export default App
