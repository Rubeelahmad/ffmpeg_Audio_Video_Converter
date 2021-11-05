const Joi = require("joi");

exports.getUserByIdValidation = Joi.object({
    id: Joi.string().required("User Id required!")
});

exports.deleteUserValidation = Joi.object({
    _id: Joi.string().required("User Id required!")
});

exports.userCreateValidation = Joi.object({
    first_name: Joi.string().required("First Name is required!"),
    last_name: Joi.string().required("Last Name is required!"),
    father_name: Joi.string().required("Father Name is required!"),
    student_class: Joi.string().allow(''),
    email: Joi.string().allow(''),
    password: Joi.string().allow(''),
});

exports.loginUserValidation = Joi.object({
    email: Joi.string().required("email is required!"),
    password: Joi.string().required("password is required!"),
    
});