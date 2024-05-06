function coneccion(Actividad){
    if(Actividad == true){
        console.log("Estas conectado");
    }else{
        console.log("Se ha perdido la coneccion");
    }
}
console.log(coneccion(false))

function bienvenido(){
    return "Bienvenido a Amazon logeate o ingresa con tu cuenta"
}
console.log(bienvenido());