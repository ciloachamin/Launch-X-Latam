let x:unknown='hola';

function saludar(saludo: string){
    console.log(saludar)
}

saludar(x as string)
//podemos forzar un casting primero transformandolo a unknown y luego al que queramos 
// saludar((x as unknown) as number)