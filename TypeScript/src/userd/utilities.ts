import { UserContactInfo } from "./types";


function printContactInfo(info:UserContactInfo){
    console.log(info)
    console.log(info.email)
}

const mama={
    nombre:"Mari",
    email:"conctacto@gmail.com",
    colorFavorito: "Blanco"
}

printContactInfo(mama);