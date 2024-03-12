const {body}= require("express-validator")

const authRegister = [

    body("nombre")
    .notEmpty()
    .withMessage("Debes completar el campo")
    .bail()
    .isLength({min:2}).withMessage("Deberá tener al menos 2 caracteres"),

    body("apellido")
    .notEmpty()
    .withMessage('Debes completar el campo').bail(),

    body("email")
    .notEmpty()
    .withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes ingresar un email válido').bail(),
    
    body('password')
    .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
    .isLength({min:8}).withMessage("Deberá tener al menos 8 caracteres"),

    //Imagen Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
    body("imagen")

]

module.exports = authRegister