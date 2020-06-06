//#region IMPORTS
const connection = require('../database/connection');
//#endregion

module.exports = {
    
    //#region GET
    async list(request, response) {
        const ong_id = request.headers.authorization;

        const casosDaOng = await connection('casos').select('*');

        return response.json(casosDaOng);
    },
    //#endregion
}