class Carrito {
    constructor(productos) {
        this.productos=productos;

    }

    addProducto(producto)
    {
    this.productos.push(producto);
    }
}