//definiciones son  estructurales

class Carro{
    fabricante:string
    modelo:string
    año:number
    isElectric: boolean
}

class Trailer{
    fabricante:string
    modelo:string
    año:number
    capacidad: number
}

const vehiculo={
    fabricante:"Ford",
    modelo:"Fiesta",
    año: 2020,
}

function printCar(car:{
    fabricante:string
    modelo:string
    año:number
}){
    console.log(`${car.fabricante} ${car.modelo} ${car.año}`)
}

printCar(new Carro())
printCar(new Trailer())
printCar(vehiculo)