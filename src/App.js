import React, { useState, useEffect } from 'react';
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";

function App() {
  let tareasGuardadas = localStorage.getItem('tareas');

  if (!tareasGuardadas) {
    tareasGuardadas = [];
  }
  const [tareas, cambiaTareas] = useState(JSON.parse(tareasGuardadas));

  let banderaMostrar = localStorage.getItem('mostrarCompletadas');
  let configMostrarCompletadas=true;
  if (banderaMostrar === null) {
    banderaMostrar = true;
  }else{
    if(banderaMostrar==='false'){
      configMostrarCompletadas=false;
    }
  }
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  //console.log(tareas);

  //Efecto de agregar tareas
  useEffect(() => {
    //guardar en localStorage
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    //guardar en localStorage
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        texto="Lista de tareas"
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <Formulario
        tareas={tareas}
        cambiaTareas={cambiaTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
