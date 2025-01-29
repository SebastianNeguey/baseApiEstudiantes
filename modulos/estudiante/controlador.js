



module.exports= function(){
    const bd = require('../../bd/bdd.js');
    const crypto = require("crypto");

    async function todos(){
        const respuesta = await bd.readJson();
        return respuesta;
    }
    async function uno(id){
        var {estudiante} = await bd.readJson();
        for(var i=0; i<estudiante.length;i++){
            if(estudiante[i].id==id){
                return estudiante[i]
            }
        }
        return {}
    }
    async function eliminar(body){
        const {nombre,id}= body
        var {estudiante} = await bd.readJson()
        for(var i=0; i<estudiante.length;i++){
            if(estudiante[i].id==id){
                estudiante.splice(i,1)
            }
        }
        bd.writeJson(estudiante);   
    }
    async function agregar(body){
        const {nombre}= body
        var {estudiante} = await bd.readJson()
        estudiante.push({
            nombre: nombre,
            id: crypto.randomUUID(),
        });
        bd.writeJson(estudiante);
    }

    async function editar(body){
        const {nombre,id}= body
        var {estudiante} = await bd.readJson()
        for(var i=0; i<estudiante.length;i++){
            if(estudiante[i].id==id){
                estudiante[i].nombre= nombre
            }
        }
        bd.writeJson(estudiante);   
    }

    return{  
        todos,
        agregar,
        editar,
        eliminar,
        uno,
    }
}