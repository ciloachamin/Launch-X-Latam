const express= require('express');
const app= express();
const port =3000;
const programmingLanguajesRouter=require('./routers/programmingLanguajes');

app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
    })
)


app.get("/",(req,res)=>{
    res.json({message:"Ok"});
});

app.use("/lenguajes",programmingLanguajesRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
});


app.listen(port,()=>{
    console.log(`App escuchando en http://localhost:${port}`)
});
