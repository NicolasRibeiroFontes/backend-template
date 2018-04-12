var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moduloSchema = new Schema({
    ordem: { type: String, required: true },
    descricao: { type: String, required: true },
    state: { type: String, required: true },
    icone: { type: String, required: true }
}, { collection: 'nf_modulos', versionKey: false });

var ModuloModel = mongoose.model('ModuloModel', moduloSchema);  
module.exports = ModuloModel;