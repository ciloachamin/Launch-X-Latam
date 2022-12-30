interface UserInfo{
    nombre:string
    email:string
}

function printUserInfo(info:UserInfo){
    console.log(info)
    console.log(info.email)
}

const mama={
    nombre:"Mari",
    email:"conctacto@gmail.com",
    colorFavorito: "Blanco"
}

printUserInfo(mama);