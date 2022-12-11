const express = require('express');
const app=express();
const path = require('path');
const router=express.Router();


// app.set("view engine", "pug");
// app.set("views",path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + '/html/index.html'))
});
router.get("/contacto",(req,res)=>{
    res.sendFile(path.join(__dirname + '/html/contacto.html'))
});
router.get("/perfil",(req,res)=>{
    res.sendFile(path.join(__dirname + '/html/perfil.html'))
});
router.get("/ubicacion",(req,res)=>{
    res.sendFile(path.join(__dirname + '/html/ingenios.pdf'))
});
router.post("/",(req,res)=>{
    //Para verficar si nos esta enviando los datos
    // console.log(req.body);
    // res.send(req.body);
    res.send("El usuario " + req.body.first_name +" ha sido registrado");
});
app.use("/",router);
app.listen(process.env.port || 3006);

console.log("Activo en el puerto 3006")