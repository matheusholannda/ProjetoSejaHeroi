//#region IMPORTS
const connection = require('../database/connection');
const generateUniqueId = require('../util/generateUniqueId');
//#endregion

module.exports = {
    
    //#region GET
    async list(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    //#endregion

    //#region POST
    async create(request, response) {
        const { nome, email, whatsapp } = request.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
        })

        return response.json({ id });
    }
    //#endregion
}