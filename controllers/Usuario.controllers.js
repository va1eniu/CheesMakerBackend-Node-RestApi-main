const Usuario = require('../models/Usuario.js')
const getUsers = (req,res)=>{
    res.status(403).json({
        "message":"home page"
    })
}

const postUsers =async(req,res)=>{
    try {
        const body = req.body;
    const usuario = new Usuario(body)
    await usuario.save()
    res.json({
        "message":"post api",
        usuario
    })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteUsers = (req,res)=>{
    res.json({
        "message":"post api"
       
    })
}

const putUsers = (req,res)=>{
    res.json({
        "message":"post api"
    })
}

const patchUsers = (req,res)=>{
    res.json({
        "message":"post api"
    })
}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}