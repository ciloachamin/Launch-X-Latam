//este es nuestro modelo

const db= require('./db');
const helper= require('../helper');
const config = require('../config');
//aveces es con comillas normales " " o con ' '
async function create(programmingLanguajes){
    const resultado=await db.query(`
    INSERT INTO alumno(cod_estudiante,dni,nombres,apellidos) VALUES
    (
    "${programmingLanguajes.cod_estudiante}",
    "${programmingLanguajes.dni}",
    "${programmingLanguajes.nombres}",
    "${programmingLanguajes.apellidos}")`);


    let message="Error al crear alumnos";
    if(resultado.affectedRows){
        message = "El alumno se a crado con exito";
    }
    return {message};
}

async function read(page=1){
    const offSet = helper.getOffSet(page,config.lisPerPage);
    const rows = await db.query(`
    SELECT * FROM alumno LIMIT ${offSet}, ${config.lisPerPage}`);

    const data = helper.emptyOrRows(rows);
    const metadata={page}

    return{
        data,
        metadata
    }
}

async function update(id,programmingLanguajes){
    const resultado=await db.query(`UPDATE alumno SET dni="${programmingLanguajes.dni}" WHERE cod_estudiante="${id}"`);
    
    let message="Error al actualizar alumnos";
    if(resultado.affectedRows){
        message = "El alumno se a actualizado con exito";
    }
    return {message};
}

module.exports={
    create,
    read,
    update
}