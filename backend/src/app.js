//#region IMPORTS
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes')
//#endregion

const app = express();

//#region APP USE
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
//#endregion

module.exports = app;