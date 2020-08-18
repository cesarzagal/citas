import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import  PropTypes  from "prop-types";

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        síntomas:'',
    });

    const [error, actualizarError] = useState(false);
    //funcion que controla los cambios en los inputs
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //extraer valores
    const {mascota,propietario,fecha,hora,síntomas} = cita;
    //Al enviar formulario
    const submitCita = (e) => {
        e.preventDefault()
        //validar form
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || síntomas.trim() === ''){
            console.log('Hay Error');
            actualizarError(true);
            return;
        }
        //eliminar mensaje previo de error
        actualizarError(false);
        //asignar id
        cita.id=uuid();

        //crear cita
        crearCita(cita);
        //reiniciar form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            síntomas:'',
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {
            error 
                ? <p className="alerta-error">Todos los campos son obligatorios.</p>
                : null
            }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota" 
                    onChange={actualizarState} 
                    value={mascota}                  
                />
                <label>Dueño Mascota</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState} 
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="síntomas"
                    onChange={actualizarState}
                    value={síntomas} 
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>   
            </form>
        </Fragment>
     );
}

Formulario.propTypes={
    crearCita: PropTypes.func.isRequired

}
export default Formulario;