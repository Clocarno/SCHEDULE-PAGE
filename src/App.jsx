
import react from 'react'
import Formulario from './components/formulario'
import Header from './components/header'
import Listado_paciente from './components/listado_paciente'
import { useState, useEffect } from "react"

function App() {
  
  const [paciente, setPaciente] = useState([]);
  const [objetoPaciente, setobjetoPaciente] = useState({});


  useEffect(() => {
    
    const getData = ()=>{

      const p = JSON.parse( localStorage.getItem("Pacientes"))  ??  [];
      setPaciente(p)
    }

    getData()


  }, [])

  useEffect(() => { 
    
    localStorage.setItem("Pacientes", JSON.stringify(paciente))
    
  }, [paciente])

  const eliminarpacientes = (id) =>{

    
    const listaActualizada = paciente.filter(paciente => paciente.id !== id);
    setPaciente(listaActualizada)



  }
  
  return (

 
    <div className='container mx-auto mt-20' >
      
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
        paciente = {paciente}
        setPaciente ={setPaciente}
        objetoPaciente = {objetoPaciente}
        setobjetoPaciente ={setobjetoPaciente}
        />
        <Listado_paciente
        paciente = {paciente}
        setobjetoPaciente ={setobjetoPaciente}
        eliminarpacientes ={eliminarpacientes}
        /> 
       
      </div>

    </div>
  )
}

export default App
