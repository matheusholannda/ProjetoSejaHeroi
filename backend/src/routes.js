//#region IMPORTS
const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const PerfilController = require('./controllers/PerfilController');
const LoginController = require('./controllers/LoginController');
//#endregion

const routes = express.Router();

//#region LOGIN
routes.post('/login', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8),
    })
}), LoginController.create);
//#endregion

//#region ONG
routes.get('/ongs', OngController.list);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().email(),
        whatsapp: Joi.string().required().min(10).max(11),
    })
}), OngController.create);
//#endregion

//#region PERFIL
routes.get('/perfil', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), PerfilController.list);
//#endregion

//#region CASOS
routes.get('/casos', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), CasoController.getAll);

routes.post('/casos', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        titulo: Joi.string().required(),
        descricao: Joi.string().required(),
        valor: Joi.number().required(),
        whatsapp: Joi.string().required().min(10).max(11),
    }),
}), CasoController.create);

routes.delete('/casos/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), CasoController.delete);
//#endregion

module.exports = routes;