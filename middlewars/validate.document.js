const {validationResult}= require ('express-validator')

const validateDocuments = (re, res, next)=>{
    const error = validationResult(req);
    if (!error. isEmpty) {
        return res.status(400).json(error);
    }
    next()
};

module.exports={
    validateDocuments
}