import React, { useState } from 'react';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tarea = ({ tarea,cambiarEstadoTarea,fncEditarTarea,fncBorrarTarea }) => {

    const [editarTarea, cambiarEditarTarea] = useState(false);

    const [actualizarTarea, cambiarActualizarTarea] = useState(tarea.texto);

    const clickEditarTarea = () => {
        cambiarEditarTarea(true);
    }
   

    const submitActualiza = (e) => {
        e.preventDefault();
        //
        fncEditarTarea(tarea.id,actualizarTarea);
        //cierra formulario
        cambiarEditarTarea(false);

    }

   
    return (
        <li
            className='lista-tareas__tarea'
        >
            <FontAwesomeIcon
                icon={tarea.completada ? faCheckSquare : faSquare}
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={()=>cambiarEstadoTarea(tarea.id)}
            />

            <div className="lista-tareas__texto">
                {editarTarea
                    ?
                    <form action="" className="formulario-editar-tarea" onSubmit={submitActualiza} >
                        <input
                            type="text"
                            className="formulario-editar-tarea__input"
                            value={actualizarTarea}
                            onChange={(e) => cambiarActualizarTarea(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="formulario-editar-tarea__btn"
                        >
                            Actualizar
                        </button>
                    </form>
                    :
                    tarea.texto
                }

            </div>

            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => clickEditarTarea()}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => fncBorrarTarea(tarea.id)}
                />
            </div>
        </li>
    );
}

export default Tarea;