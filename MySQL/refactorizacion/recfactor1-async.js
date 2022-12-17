//mi promesa
/**
 * Devuelve la cadena Algo
 * @returns {string} Algo
 */
function miFuncion(){
    return("Algo");
}


miFuncion()
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    });

    //forma mas eficiente
    // ASYNC/AWAIT

    try {
        const data = await miFuncion();
        console.log(data)
    } catch (error) {
        console.log("error aaa")
    }