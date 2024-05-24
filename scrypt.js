var nombre= prompt("Ingresá tu nombre");

if(nombre!=""){
    saludo(nombre);
}else{
    alert("Por favor, ingresá tu nombre")
}

function saludo(nombre){
    alert("Bienvenido " + nombre)
}