'use strict'
//variable no declarada nos da error con el use strict activo
 let variableNoDeclarada=10;
console.log(variableNoDeclarada);

//funcion estricta
function funcionEstricta(){
    'use strict'
    var leti="estricto";
    console.log(leti)
}

//funcion No estricta
function funcionNoEstricta(){
    var leti="NO estricto";
    console.log(leti)
}

funcionEstricta();
funcionNoEstricta();