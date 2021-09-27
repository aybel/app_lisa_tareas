import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Formulario = () => {
    return (

        <form action="">
            <input
                type="text"
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
            />
            <button 
            type="submit"
                className="formulario-tareas__icono-btn">
                <FontAwesomeIcon 
                className="formulario-tareas__icono" 
                icon={faPlusSquare} /> 
                Agregar tarea
            </button>
        </form>

    );
}

export default Formulario;