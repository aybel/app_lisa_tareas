import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react/cjs/react.production.min';
import ListaTareas from './ListaTareas';

const Formulario = ({ tareas, cambiaTareas,mostrarCompletadas }) => {
    const [inputTarea, cambiaInputTarea] = useState('');

    const changeCambiaInputTarea = (e) => {
        cambiaInputTarea(e.target.value);
    }

    const agregarTarea = (e) => {
        e.preventDefault();
        cambiaTareas([...tareas,
        {
            id: uuidv4(),
            texto: inputTarea,
            completada: false
        }]);

        //limpiar formulario
        cambiaInputTarea('');
    }


    return (
        <Fragment>
            <form action="" className="formulario-tareas" onSubmit={agregarTarea}>
                <div>
                    <input
                        type="text"
                        className="formulario-tareas__input"
                        placeholder="Escribe una tarea"
                        onChange={(e) => changeCambiaInputTarea(e)}
                        value={inputTarea}
                    />
                    <button
                        type="submit"
                        className="formulario-tareas__btn">
                        <FontAwesomeIcon
                            className="formulario-tareas__icono-btn"
                            icon={faPlusSquare}
                        />
                        Agregar tarea
                    </button>
                </div>
            </form>

            <ListaTareas 
            tareas={tareas} 
            cambiaTareas={cambiaTareas}
            mostrarCompletadas={mostrarCompletadas}
             />
        </Fragment>

    );
}

export default Formulario;