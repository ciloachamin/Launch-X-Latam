//si no le damos el tipo de dato nos deja usar cualquiera 
function suma1(a,b){
    return a+b;
}

//podemos decir que nos retorne un tipo de datos especificos d ela siguiente manera 
function suma(a,b):number{
    return a+b;
}

const resultado = suma(4,"3");
console.log(resultado);