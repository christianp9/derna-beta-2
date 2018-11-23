const{celebrate,Joi}= require('celebrate');

module.exports= celebrate({
    body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.boolean().required()
    })
})