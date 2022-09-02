import { useState } from "react";
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'

function App() {

  const [cantidadProductos, setCantidadProductos] = useState(0)

  const sumarCompra = () => setCantidadProductos(cantidadProductos + 1)

  return (
    <div className="App">
      <Cabecera cantidad={cantidadProductos} />
      <Listado sumarCompra={sumarCompra}/>
    </div>
  );
}

export default App;