let productModel =[
    {
        "id": 1,
        "name": "Lapiz del numero 2",
        "outdated":false
    }
];


const productosActualizar=await productModel.find({outdated:false});

for (const key in productosActualizar) {
    const producto =productosActualizar[key];
    producto.outdated=false;
    await producto.save();
}

//alternativa mejor
//Escribir una sola consulta

await productModel.update({outdated:true},{
    $set:{
        outdated:false
    }
});

//otra alternativa promise.all

/**
 * Devuelve la suma de la data
 * @param {int} data 
 * @returns {int}
 */

function functionAsync(data){
    return data+data;
}

const primerOperacion = functionAsync("1");
const segundaOperacion = functionAsync("2");
const terceraOperacion = functionAsync("3");

await Promise.all([primerOperacion,segundaOperacion,terceraOperacion]);