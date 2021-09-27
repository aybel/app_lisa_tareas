import React, { useState } from 'react';
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";


function App() {

  const [tareas, cambiaTareas] = useState(
    [
      { id: 1, texto: 'Desayuno', completada: false },
      { id: 2, texto: 'Ejercicio', completada: false }
    ]
  );


  return (
    <div className="contenedor">
      <Header texto="Lista de tareas" />
      <Formulario tareas={tareas} cambiaTareas={cambiaTareas} />
    </div>
  );
}

export default App;
