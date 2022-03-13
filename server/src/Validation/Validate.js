const Joi =  require('@hapi/joi');

function ValidateBody(schema){
    return (req, res, next) => {
        const ValidatorResult = schema.validate(req.body)

        if (ValidatorResult.error){
            return res.status(400).json(ValidatorResult.error)
        }else{
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.boy = ValidatorResult.value
            next()
        }
    }
}
function ValidateParam(schema, name){
    return (req, res, next) => {
        const ValidatorResult = schema.validate({param: req.params[name]})

        if (ValidatorResult.error) {
            return res.status(400).json(ValidatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.params[name] = req.params[name]
            next()
        }
    }
}


const Schemas = {
    userSchema: Joi.object().keys({
        Firstname: Joi.string().min(2).required(),
        Lastname: Joi.string().min(2).required(),
        Address: Joi.string().min(2).required(),
        Phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(), 
        email: Joi.string().regex(/^[a-z][a-z0-9_\.]{5,32}@(tnt\.store)(\.com)$/).email().required(),
    }),

    SignUpSchema: Joi.object().keys({
        Firstname: Joi.string().min(2),
        Lastname: Joi.string().min(2),
        Address: Joi.string().min(2).required(),
        Phone: Joi.string().regex(/^\d{3}\d{3}\d{4}$/), 
        email: Joi.string().regex(/^[a-z][a-z0-9_\.]{5,32}@(tnt\.store)$/).email().required(),
        password: Joi.string().min(8),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required()
    }),

    SignInSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }),
}

module.exports = {
    ValidateBody,
    ValidateParam,
    Schemas,
}