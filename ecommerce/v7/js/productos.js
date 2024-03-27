export const recuperarProductos = async () => {
    const datos = await fetch('https://idyd.ar:3000/api/products');
    const datosJson = await datos.json();

    return datosJson.data;
}
