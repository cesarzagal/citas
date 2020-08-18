import React,{ Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

    //Citas en localstorage
    let citasIniciales = localStorage.getItem('citas');
    if(!citasIniciales){
        citasIniciales=[];
    }
    //Arreglo de Citas
    const [citas, guardarCitas] = useState([]);

    //Use effect para realizar operaciones cuando cambia
    useEffect( () => {
        if(citasIniciales){ 
            localStorage.setItem('citas', JSON.stringify(citas));
        }
        else{
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas,citasIniciales])
    //function que tome las citas actuales y tome una nueva
    const crearCita = (cita) => {
        guardarCitas([...citas, cita]);
    }
    //Eliminar citas
    const eliminarCita = (id) => {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCitas(nuevasCitas);
    }
    const título = citas.length === 0 ? 'Agrega Citas' : 'Listado de Citas' ;
    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        <h1>{título}</h1>
                        {citas.length === 0
                            ?                            
                            null
                            :
                            citas.map(cita => (
                                <Cita
                                    key={cita.id}
                                    cita={cita}
                                    eliminarCita={eliminarCita}
                                />
                            ))
                        }
                        
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
