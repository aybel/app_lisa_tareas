import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";

function App() {
  return (
    <div className="contenedor">
      <Header texto="Lista de tareas" />
      <Formulario />
    </div>
  );
}

export default App;
