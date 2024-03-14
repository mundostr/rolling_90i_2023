/**
 * Creamos un archivo central de configuración.
 * 
 * React provee un mecanismo para crear contextos (useContext) que se utiliza
 * habitualmente para configuraciones generales, no obstante la opción de un
 * simple objeto exportado por defecto, que puede ser importado en cualquier
 * área del proyecto donde se necesiten los datos, funciona bien.
  */

const config = {
    VERSION: '8.1',
    API_BASE: 'https://idyd.ar:3000/api'
}

export default config;
