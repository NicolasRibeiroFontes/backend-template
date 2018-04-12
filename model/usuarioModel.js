var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }    
}, { collection: 'nf_usuarios', versionKey: false });

var UsuarioModel = mongoose.model('UsuarioModel', usuarioSchema);  
module.exports = UsuarioModel;