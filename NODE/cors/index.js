const cors=require('cors');
const express = require('express');
const app = express();

app.use(cors({
    origin: ['https://section.io','https://www.google.com']
}));

const ingredientes=[
    {
        "id":"1",
        "item":"huevos"
    },
    {
        "id":"2",
        "item":"leche"
    },
    {
        "id":"3",
        "item":"hot-cakes"
    },
    {
        "id":"4",
        "item":"chilaquiles"
    }
];

app.get('/ingredientes',(req,res)=>{
    res.send(ingredientes);

});

app.listen(3004);