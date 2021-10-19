import React from 'react';
import Tarea from './Tarea';
const ListaTareas = ({ tareas, cambiaTareas, mostrarCompletadas }) => {

    //Cambia el estado de una tarea
    const cambiarEstadoTarea = (id) => {
        //console.log("cambiar estado de la tarea",id);
        cambiaTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    completada: !tarea.completada
                }
            }
            return tarea;
        }));

    }

    const fncEditarTarea = (id, nuevoTexto) => {
        cambiaTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    texto: nuevoTexto
                }
            }
            return tarea;
        }));
    }

    const fncBorrarTarea = (id) => {

        cambiaTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea;
            }
            return;
        }));
    }

    return (
        <ul>
            {tareas.length > 0 ? tareas.map((tarea) => {
                if (mostrarCompletadas) {
                    return <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        cambiarEstadoTarea={cambiarEstadoTarea}
                        fncEditarTarea={fncEditarTarea}
                        fncBorrarTarea={fncBorrarTarea}
                    />
                } else if (!tarea.completada) {
                    return <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        cambiarEstadoTarea={cambiarEstadoTarea}
                        fncEditarTarea={fncEditarTarea}
                        fncBorrarTarea={fncBorrarTarea}
                    />
                }
                return;

            })
                : <div className="lista-tareas__mensaje">-- No hay tareas agregadas --</div>
            }
        </ul>
    );
}

export default ListaTareas;