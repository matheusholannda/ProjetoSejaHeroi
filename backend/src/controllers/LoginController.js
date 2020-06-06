//#region IMPORTS
const connection = require('../database/connection');
//#endregion

module.exports = {

    //#region POST
    async create(request, response) {
        const { id } = request.body;

        const ongConectada = await connection('ongs').where('id', id).select('nome').first();

        if (!ongConectada) {
            return response.status(400).json({ error: 'Não foi encontrada nenhuma ONG com este ID.' })
        }

        return response.json(ongConectada);
    }
    //#endregion
}