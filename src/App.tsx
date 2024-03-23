import './App.css'

function App() {

    const projectOwnerName = 'John'
    const projectOwnerAge = Math.floor(Math.random() * 100) + 1
    const projectFamilies = ['John', 'Jane', 'Sergio', 'Roland', 'Sally']

    type Employee = {
        name?: string,
        age: number
    }

    const employeeOne: Employee = {
        age: 45,
        name: 'Kwame Nsoh'
    }

    function showName(name: string){
        console.log(name)
    }

    showName('Jay Mingle')

  return (
    <>
        <p>The name of the project owner is {projectOwnerName}</p>
        <p>The Project Number is {projectOwnerAge} years old</p>
        <p>My family members are {projectFamilies}</p>
        <p>Employee Age {employeeOne.age}</p>
        <p>Empoyee Name {employeeOne.name}</p>
    </>
  )
}

export default App
