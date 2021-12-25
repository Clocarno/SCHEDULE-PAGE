import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({paciente, setPaciente, objetoPaciente, setobjetoPaciente}) => {

    const[Nombre, setNombre] = useState('');
    const[propietario, SetPropietario] = useState('');
    const[email, setEmail] = useState('');
    const[alta, setAlta] = useState('');
    const[sintomas, setSintomas] = useState('');
    const[error, setError] = useState(false)
    const generarId = () => {

        const randomNumber = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return randomNumber + fecha

    }

    useEffect(() => {

        if(Object.keys(objetoPaciente).length){

            setNombre(objetoPaciente.Nombre)
            SetPropietario(objetoPaciente.propietario)
            setEmail(objetoPaciente.email)
            setAlta(objetoPaciente.alta)
            setSintomas(objetoPaciente.sintomas)
            
        }
       

    }, [objetoPaciente])

    const handleSubmit = (e) =>{

        e.preventDefault();

        if([Nombre, propietario, email, alta, sintomas].includes('')){
            setError(true)
            return;
        }

        setError(false)

        const ListobjetoPaciente ={

            Nombre,
            propietario, 
            email, 
            alta, 
            sintomas,
            
        }

        if(objetoPaciente.id){
            //editando
            ListobjetoPaciente.id = objetoPaciente.id
            const PacienteActualizado = paciente.map(pacienteObjetoState => pacienteObjetoState.id ===  
                ListobjetoPaciente.id ? ListobjetoPaciente: pacienteObjetoState)

            setPaciente(PacienteActualizado)
            setobjetoPaciente({})


        }
        else{
            //nuevo registro
            ListobjetoPaciente.id = generarId()
            setPaciente([...paciente, ListobjetoPaciente])
        }

        

        //reiniciar form
        setNombre('')
        SetPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
        setError('')

    
    
    
    
    }




    return (
        <div className="md:w-1/2 lg:2/5 md:mx-12">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-center text-lg mt-5 mb-10">Añade pacientes y {''}
                <span className="font-bold text-indigo-600 "> Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mx-5 mb-10" onSubmit={handleSubmit} action="">
                
                {error && <Error mensaje='Todos los campos son obligatorios'/>
                
                }
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre mascota</label>
                    <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre mascota" 
                      value={Nombre}
                      onChange={(e) =>{setNombre(e.target.value)}}
                    
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre propetario</label>
                    <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Propetario"
                    value={propietario}
                    onChange={(e) =>{SetPropietario(e.target.value)}}
                    
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email Contacto Propietario" 
                    value={email}
                    onChange={(e) =>{setEmail(e.target.value)}}
                    
                    
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                    <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date"
                     value={alta}
                     onChange={(e) =>{setAlta(e.target.value)}}
                    
                    
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                   <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  id="sintomas" 
                   placeholder="Describe Los Sintomas"
                   value={sintomas}
                   onChange={(e) =>{setSintomas(e.target.value)}}
                   
                   
                   ></textarea>
                </div>

                <input 
                 type="submit"
                 className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                 value={objetoPaciente.id? "Editar Paciente" : "Agregar Paciente"}
                 
                 />
            </form>


        </div>
    )
}

export default Formulario
