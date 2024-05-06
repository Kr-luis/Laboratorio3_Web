function Bienvenida(Usuario){

    return "Hola!!! "+ Usuario
}

console.log(Bienvenida('Luis Guaygua'))

const precioFinalProductoAmazon = function(precioBase, envio, ...costosAccesorios){
    let total = precioBase + envio;
    if(costosAccesorios.length > 0) costosAccesorios.forEach(e => total += e);
    return total;
}

console.log(precioFinalProductoAmazon(100, 20, 15, 10));
