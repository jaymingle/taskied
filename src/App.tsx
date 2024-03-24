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

    </>
  )
}

export default App
