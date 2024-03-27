import config from './config';
import { useState } from 'react';
import Producto from './components/Producto';

import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import rollingLogo from '/img/rolling_logo.png';
import './App.css';

const recuperarProductos = async () => {
    const data = await fetch(`${config.BASE_API}/products`);
    const jsonData = await data.json();
    return jsonData.data;
}
const productos = await recuperarProductos();

function App() {
    const [ carrito, setCarrito ] = useState({ productos: [], cantidad: 0, total: 0, activo: true });

    const comprar = (codigoProducto) => {
        const productoElegido = productos[codigoProducto - 1];

        setCarrito(carritoActual => ({
            productos: [...carritoActual.productos, productoElegido],
            cantidad: carritoActual.cantidad + 1,
            total: carritoActual.total + productoElegido.precio,
            activo: true
        }));
    }

    return (
        <>
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
                            <h1><i className="fas fa-shopping-cart"></i> {carrito.cantidad} (${carrito.total.toFixed(2)})</h1>
                            
                            <ListGroup>
                                {carrito.productos.map((item, index) => {
                                    return <ListGroup.Item key={index}>1 x {item.nombre} $({item.precio.toFixed(2)})</ListGroup.Item>
                                })}
                            </ListGroup>

                            <Button variant="success" className="mt-2 w-25">Comprar</Button>
                        </>}
                    </Row>

                    {/* Productos en oferta */}
                    <Row className="mt-5">
                        <h1>Productos disponibles para compra</h1>

                        {productos.map((item) => {
                            return <Col lg={3} md={4} sm={6} xs={12} key={item.codigo} style={{ marginBottom: '1em' }}>
                                <Producto producto={item} comprar={comprar} />
                            </Col>
                        })}
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default App;
