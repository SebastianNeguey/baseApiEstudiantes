const express= require('express');

const respuesta= require('../../red/respuestas.js')
const controlador= require('./index.js');

router= express.Router();

router.get('/:id', uno);
router.get('/', todos);
router.put('/', eliminar);
router.post('/', agregar);



async function uno(req,res){
    try{
        const items= await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200);
    }catch(err){
        respuesta.error(req,res, err, 500);
    }
};

async function todos(req,res){
    try{
        const items= await controlador.todos();
        respuesta.success(req, res, items, 200);
    }catch(err){
        respuesta.error(req,res, err, 500);
    }
};

async function eliminar (req,res, next){
    try{
        const items= await controlador.eliminar(req.body);
        respuesta.success(req, res, 'Elemento eliminado', 200);
    }catch(err){
        next(err);
    }
};

async function agregar (req,res, next){
    try{
        if(req.body.id){
            await controlador.editar(req.body);
            respuesta.success(req, res, 'Elemento editado', 200);
        }
        else{
            await controlador.agregar(req.body);
            respuesta.success(req, res, 'Elemento agregado', 200);
        }
    }catch(err){
        next(err);
    }
};

module.exports = router;

