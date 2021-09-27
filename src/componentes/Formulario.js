import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import ListaTareas from './ListaTareas';

const Formulario = ({ tareas, cambiarTareas }) => {
    return (
        <Fragment>
            <form action="" className="formulario-tareas">
                <div>
                    <input
                        type="text"
                        className="formulario-tareas__input"
                        placeholder="Escribe una tarea"
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
            <ListaTareas />
        </Fragment>

    );
}

export default Formulario;