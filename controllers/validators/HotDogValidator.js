const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(6).max(100).required(),
    description: Joi.string().alphanum().min(6).max(100).required(),
    price: Joi.number().greater(0).required(),
    imageLink: Joi.string().allow(null, ''),
});