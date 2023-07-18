const {Router} = require('express');
const{check} = require('express-validator')
const {getUsers,postUsers,deleteUsers,putUsers,patchUsers} = require('../controllers/Usuario.controllers.js');
const { validateDocuments } = require('../middlewars/validate.document.js');
const Rol = require('../models/rol.js');
const router = Router();

router.get("/",getUsers);
router.post("/", [
    check('nombre', 'nombre es obligatorio').not().isEmpty(),
    check('password', 'password no es valido').isLength({min : 6}),
    check('email', 'el correo no es valido').isEmail(),
   /*  check('rol', 'el rol no es valido').isIn('ADMIN', 'USER') */,
   check ('rol').custom(async(rol= '')=>{
    const existeRol = await Rol.findOne({rol});
    if (!existeRol) {
        throw new Error(`el rol ${rol} no esta registrado en la base de dstos`)
    }
   }),
    validateDocuments
],postUsers);
router.delete("/",deleteUsers);
router.put("/",putUsers);
router.patch("/",patchUsers);


module.exports = router;