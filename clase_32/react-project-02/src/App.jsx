/**
 * En nuestro caso utilizamos siempre la sintaxis import / export para
 * manejo de módulos, no obstante muchas veces pueden ver una sintaxis
 * alternativa (más antigua) con require:
 * 
 * const fs = require('fs');
 */
import viteLogo from '/vite.svg' // svg = formato vectorial
import rollingLogo from '/img/rolling_logo.png'
import './App.css'
import config from './config'

// Desestructuración de objeto
// "Extraemos" VERSION y API_BASE del objeto config
const { VERSION, API_BASE } = config;

// Declaramos y llamamos a una función asíncrona que recupera
// los productos desde un servicio externo
const recuperarProductos = async () => {
  const datos = await fetch(`${API_BASE}/products`);
  const datosJson = await datos.json();

  return datosJson.data;
}
const productos = await recuperarProductos();

function App() {
  // Desestructuración de array
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* Podemos insertar imágenes tanto con rutas tradicionales como a
          través de objetos importados */}
          {/* <img src='/img/rolling_logo.png' alt="RollingCodeSchool" /> */}
          <img src={rollingLogo} alt="RollingCodeSchool" className="logo1" />
          <img src={viteLogo} alt="RollingCodeSchool" className="logo1" />
        </a>
      </div>

      <h1>Rolling Compras v{VERSION}</h1>
      {/* Operador ternario, expresión que veremos habitualmente al manejar
      condiciones en plantillas JSX */}
      <h2>Productos en ruta {API_BASE.includes('localhost') ? 'local': 'remota'} ({productos.length} en oferta)</h2>

      {/* Otro extracto de código habitual, un map para recorrer y mostrar contenidos de un array */}
      <ul>
        {productos.map((item) => {
          return <li key={item.codigo}>{item.nombre} ({item.precio})</li>
        })}
      </ul>
    </>
  )
}

export default App
