var UsuarioModel = require('../../model/usuarioModel');
var Usuario = new UsuarioModel();

function validarCampo(campo) {
    if (campo == '' || campo == null || campo == undefined)
        return true;
    else
        return false;
}

exports.salvarUsuario = (req, res, next) => {
    Usuario = new UsuarioModel(req.body);
    if (validarCampo(Usuario.nome) || validarCampo(Usuario.email) || validarCampo(Usuario.senha))
        res.send({ status: false, mensagem: 'Há campos obrigatórios em branco!' });
    else {
        Usuario.save();
        res.send({ status: true, mensagem: 'Usuário cadastrado com sucesso' });
    }
};

exports.buscarTodosUsuarios = (req, res, next) => {
    UsuarioModel.find({}, function (erro, usuarios) {
        res.send((!erro ? usuarios : erro));
    })
};

exports.editarUsuario = (req, res, next) => {
    Usuario = new UsuarioModel(req.body);

    UsuarioModel.findOneAndUpdate({ _id: req.params.id },
        { $set: { nome: Usuario.nome, sobrenome: Usuario.sobrenome, dataNascimento: Usuario.dataNascimento, senha: Usuario.senha,
        email: Usuario.email, telefone: Usuario.telefone, celular: Usuario.celular,
        cep: Usuario.cep, endereco: Usuario.endereco, numero: Usuario.numero, complemento: Usuario.complemento,
        bairro: Usuario.bairro, cidade: Usuario.cidade, estado: Usuario.estado } }, { new: true },
        function (erro, usuarioEditado) {
            res.send((!erro ? { status: true, mensagem: 'Usuário Editado com sucesso!' } : { status: false, mensagem: erro.message }));
        });
}

exports.buscarUsuarioPorId = (req, res, next) => {
    UsuarioModel.findOne({ _id: req.params.id }, function (erro, usuario) {
        res.send((!erro ? usuario : erro));
    })
}

exports.buscarUsuarioPorEmail = (req, res, next) => {
    UsuarioModel.findOne({ email: req.params.email }, function (erro, usuario) {
        res.send((!erro ? usuario : erro));
    })
}

exports.excluirUsuario = (req, res, next) => {
    UsuarioModel.findOneAndRemove({ _id: req.params.id }, function (erro, usuario) {
        res.send((!erro ? {status:true} : {status:false}));
    })
}

exports.logarUsuario = (req, res, next) => {
    UsuarioModel.findOne({ email: req.body.login, senha: req.body.senha }, function (erro, usuario) {
        res.send((!erro
            ? (usuario ? { status: true, objeto: usuario } : { status: false, mensagem: "Usuário/Senha Incorretos" })
            : { status: false, mensagem: "Não foi possível logar" }));
    })
}