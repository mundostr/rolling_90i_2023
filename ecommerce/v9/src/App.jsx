import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner, Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

import config from './config';
import Producto from './components/Producto';
import { formatearCarrito } from './App.services';

import rollingLogo from '/img/rolling_logo.png';
import './App.css';

function App() {
    const [ recargar, setRecargar ] = useState(false);
    const [ cargando, setCargando ] = useState(false);
    const [ productos, setProductos ] = useState([]);
    const [ carrito, setCarrito ] = useState({ productos: [], cantidad: 0, total: 0, bono: 0 });

    const gestionar = (accion, codigoProducto, cantidad) => {
        const productoElegido = productos.find(producto => producto.codigo === codigoProducto);

        setCarrito(carritoActual => {
            return formatearCarrito(accion, carritoActual, productoElegido, cantidad);
        });
    }

    const recuperarProductos = async () => {
        console.log('Recupera productos');
        
        setCargando(() => true);
        
        // Solicitud remota con módulo nativo fetch
        /* const data = await fetch(`${config.BASE_API}/products`);
        const jsonData = await data.json();
        setProductos(() => jsonData.data); */

        // Solicitud remota con módulo axios
        const response = await axios.get(`${config.BASE_API}/products`);
        setProductos(() => response.data.data);
        
        setTimeout(() => {
            // Simulamos demora para ver el funcionamiento del botón Cargando...
            setCargando(() => false);
        }, 3000);
    }

    /**
     * useEffect() con array vacío: se ejecuta SOLO AL MONTAR el componente
     * 
     * useEffect() con elementos en array: se ejecuta SOLO AL MONTAR el componente
     * y si alguno de los elementos indicados en el array, cambia
     */
    useEffect(() => {
        recuperarProductos();
    }, [recargar]); // 2do parámetro = array de dependencias

    return (
        <>
            {cargando &&
                <div>
                    <Button className="spinner" variant="success">
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        &nbsp;Cargando...
                    </Button>
                </div>
            }

            <header>
                <Container fluid>
                    <Row className="mt-3">
                        <a href="#" target="_blank">
                            <img src={rollingLogo} alt="RollingCodeSchool" />
                        </a>
                    </Row>

                    <Row className="m-3">
                        <h1>Rolling Compras v{config.VERSION}</h1>
                    </Row>
                </Container>
            </header>

            <main>
                <Container fluid>
                    {/* Carrito */}
                    <Row className="mt-3">
                        {carrito.cantidad === 0 && <>
                            <h1><i className="fas fa-shopping-cart"></i> Vacío</h1>
                        </>}

                        {carrito.cantidad > 0 && <>
                            <h1><i className="fas fa-shopping-cart"></i> {carrito.cantidad} (${carrito.total.toFixed(2)}) [${carrito.bono.toFixed(2)}]</h1>
                            
                            <ListGroup>
                                {carrito.productos.length > 0 && carrito.productos.map((item, index) => {
                                    return <ListGroup.Item key={index} onClick={() => gestionar('quitar', item.codigo, 1)}>1 x {item.nombre} $({item.precio.toFixed(2)})</ListGroup.Item>
                                })}
                            </ListGroup>

                            <Button variant="success" className="mt-2 w-25">Comprar</Button>
                        </>}
                    </Row>

                    {/* Productos en oferta */}
                    <Row className="mt-5">
                        <h1>Productos disponibles para compra</h1>
                        <Button variant="success" className="mt-2 w-25" onClick={() => {setRecargar(act => !act)}}>Recargar</Button>
                    </Row>
                    
                    <Row className="mt-3">
                        {productos.length > 0 && productos.map((item) => {
                            return <Col lg={3} md={4} sm={6} xs={12} key={item.codigo} style={{ marginBottom: '1em' }}>
                                <Producto producto={item} gestionar={gestionar} />
                            </Col>
                        })}
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default App;
