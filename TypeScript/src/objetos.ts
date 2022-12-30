//javaScript
let carro={
    fabricante:"toyota",
    modelo: "Prius",
    año: 2022
}

//TypeScript
let carroTypeScript: {
    fabricante: string,
    modelo: string,
    año: number
}


function getCar(car:{
    fabricante: string,
    modelo: string,
    año: number
    color?: string //este campo es opcional por"?""
}){
let str=""
    if(typeof car.color ===undefined)
        str=`${car.fabricante} ${car.modelo} ${car.año}`
    else
        str=`${car.fabricante} ${car.modelo} ${car.año} ${car.color}` 
}

getCar(carro);