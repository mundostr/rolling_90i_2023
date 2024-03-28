import config from './config';

export const formatearCarrito = (accion, carritoActual, productoAOperar, cantidad) => {
    let nuevoListado = [];
    
    if (accion === 'quitar') {
        cantidad = -cantidad;
        const indiceAQuitar = carritoActual.productos.findIndex(producto => producto.codigo === productoAOperar.codigo);
        carritoActual.productos.splice(indiceAQuitar, 1);
        nuevoListado = carritoActual.productos;
    } else {
        nuevoListado = [...carritoActual.productos, productoAOperar];
    }

    const carritoFormateado = {
        productos: nuevoListado,
        cantidad: carritoActual.cantidad + cantidad,
        total: carritoActual.total + (productoAOperar.precio * cantidad),
        bono: carritoActual.bono
    };

    if (carritoFormateado.total > config.IMPORTE_MINIMO_DESCUENTO) {
        carritoFormateado.bono = carritoFormateado.total * config.DESCUENTO_BASE;
    } else {
        carritoFormateado.bono = 0;
    }

    return carritoFormateado;
};
