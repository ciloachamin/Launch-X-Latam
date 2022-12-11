const { Socket } = require('dgram');
const express = require('express');
const app =express();
const http=require('http');
const server=http.createServer(app);
const { Server }=require('socket.io');
const io = new Server(server);


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/html/index.html")
});

io.on('connection',(socket)=>{
    console.log("Un usuario se a conectado al chat ");

    socket.on('chat message',(msg)=>{
        // console.log("El mensaje es: "+msg)
        io.emit('chat message',msg);
    });

    socket.on('disconnect',()=>{
        console.log("El usuario se ha desconectado")
    });
});

server.listen(3006,()=>{
    console.log("escuchando en el puerto 3006")
});