var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default:'' },
    dataNascimento: { type: String, required: false, default:'' },
    senha: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: false, default:'' },
    celular: { type: String, required: false, default:'' },
    cep: { type: String, required: false, default:'' },
    endereco: { type: String, required: false, default:'' },
    numero: { type: String, required: false, default:'' },
    complemento: { type: String, required: false, default:'' },
    bairro: { type: String, required: false, default:'' },
    cidade: { type: String, required: false, default:'' },
    estado: { type: String, required: false, default:'' },
}, { collection: 'nf_usuarios', versionKey: false });

var UsuarioModel = mongoose.model('UsuarioModel', usuarioSchema);  
module.exports = UsuarioModel;