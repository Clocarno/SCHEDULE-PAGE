import React from 'react'
import { useState, useEffect } from "react"


const Paciente = ({paciente, setobjetoPaciente, eliminarpacientes}) => {

    const {Nombre, propietario, email, alta, sintomas, id} = paciente;
 
  

    return (
        <div className="mx-5 mb-5 bg-white shadow-md px-5 py-10 rounded-xl">
               <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
               <span className="font-normal normal-case">{Nombre}</span>
               
               </p>

               <p className="font-bold mb-3 text-gray-700 uppercase">propietario: {''}
               <span className="font-normal normal-case">{propietario}</span>
               
               </p>

               <p className="font-bold mb-3 text-gray-700 uppercase">email: {''}
               <span className="font-normal normal-case">{email}</span>
               
               </p>

               <p className="font-bold mb-3 text-gray-700 uppercase">fecha alta: {''}
               <span className="font-normal normal-case">{alta}</span>
               
               </p>

               <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
               <span className="font-normal normal-case">{sintomas}</span>
               
               </p>

               <div className='flex justify-between'>

               <button onClick={()=>setobjetoPaciente(paciente)} className=' mt-2 py-2 px-5  text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-lg'>Editar</button>
               <button onClick={()=>eliminarpacientes(id)} className=' mt-2 py-2 px-5  text-white  bg-red-600 hover:bg-red-700 cursor-pointer rounded-lg'>Eliminar</button>
               </div>
           </div>
    )
}

export default Paciente
