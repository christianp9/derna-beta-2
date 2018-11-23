const { Joi, celebrate } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    name_father: Joi.string().required(),
    name_mother: Joi.string().required(),
    guardia_name: Joi.string().required(),
    age: Joi.number().required(),
    monthly_payment:Joi.number().required(),
    parent_number:Joi.string().required(),
    home_address:Joi.string().required(),
    img:Joi.string().required()
  })
})

