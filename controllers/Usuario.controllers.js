const bcryptjs = require("bcryptjs");
const Usuario = require('../models/Usuario.js')


const getUsers = (req,res)=>{
    res.status(403).json({
        "message":"home page"
    })
}

const postUsers =async(req,res)=>{


    try {
        const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol})

    //verificar 

    const existeEmail = await Usuario.findOne({email});
    if (existeEmail) {
        return res.status(400).json({
            msg: "email is alredy registered"
        })
    }

//encriptar contraseña

const salt = bcryptjs.genSaltSync
usuario.password = bcryptjs.hashSync(password, salt );

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