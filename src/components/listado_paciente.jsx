import Paciente from "./paciente"
import { useState, useEffect } from "react"


const Listado_paciente = ({paciente, setobjetoPaciente, eliminarpacientes}) => {
    
    function setobjetoPacientefunc(objeto){

      
        setobjetoPaciente(objeto)


    }
    
    return (
        <div className="md:w-1/2 lg:3/5  ">
           <h2 className="text-center text-3xl font-black">Listado paciente</h2> 
           <p className="text-xl mt-5 mb-10 text-center">Administra tu {''}
           <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
           
           </p>

           <div className="overflow-y-scroll md:h-screen">  
            {

                paciente.map((paciente)=>(

                    <Paciente
                    key={paciente.id}
                    paciente = {paciente} 
                    setobjetoPaciente = {setobjetoPaciente}
                    eliminarpacientes = {eliminarpacientes}                
                    />
            ))}
            

          
           
            </div> 
        </div>
    )
}

export default Listado_paciente
