import React from 'react';
import  PropTypes  from "prop-types";
const Cita = ({cita,eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha} {cita.hora}</span></p>
        <p>Síntomas: <span>{cita.síntomas}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id)}
        >
            Eliminar
        </button>
    </div>
)
Cita.propTypes={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
} 
export default Cita;