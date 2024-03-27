import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './Producto.css';

function Producto({ producto, comprar }) {
    return (
        <>
            <Card className="card-personalizada">
                <Card.Img variant="top" src={`/img/productos/${producto.imagen}`} />
                
                <Card.Body>
                    <Card.Title>{producto.nombre} ($ {producto.precio.toFixed(2)})</Card.Title>
                    <Card.Text>{producto.stock} kg en stock</Card.Text>
                    <Button variant="success" onClick={() => comprar(producto.codigo)}>Comprar</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Producto;
