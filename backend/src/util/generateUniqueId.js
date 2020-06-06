//#region IMPORTS
const crypto = require('crypto');
//#endregion

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}