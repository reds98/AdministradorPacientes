import React from 'react'
import "./Paciente.css"
export default function Paciente({pacientes, setPacientes, nombre,dueño}) {
  const eliminarCita=()=>{
    const newPacientes=pacientes.filter(paciente => paciente.dueño != dueño);
    setPacientes(newPacientes)
  }
  return (
    <div className='pacienteContainer'>
        <h2>Nombre: {nombre} </h2>
        <h2>Dueño: {dueño} </h2>
        <button onClick={eliminarCita}>ELIMINAR CITA</button>
    </div>
  )
}
