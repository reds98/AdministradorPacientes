import React, { useState } from 'react'
import './Formulario.css'
export default function Formulario({pacientes, setPacientes}) {
    const [mascota, setMascota] = useState("")
    const [dueño, setDueño] = useState("")

    function agregarPaciente(){
      const informacion={
        mascota,
        dueño
      }
      setPacientes([...pacientes,informacion])
      
      setMascota("")
      setDueño("")
    }

    return (
        <div>
            <form className='inputForm' action="">
                <label htmlFor="mascota">Nombre Mascota </label>
                <input id='mascota' onChange={(e) => { setMascota(e.target.value) }} value={mascota} type="text" />
                <label htmlFor="">Nombre Dueño</label>
                <input onChange={(e) => { setDueño(e.target.value) }} value={dueño} type="text" />
                
                <button onClick={agregarPaciente} type='button'>Agregar</button>
            </form>
        </div>
    )
}
 
