var UsuarioModel = require('../../model/usuarioModel');
var Usuario = new UsuarioModel();

exports.salvarUsuario = (req, res, next) => {
    console.log(req);
    Usuario = new UsuarioModel(req.body);
    Usuario.save();
    res.send('Usuario salvo com sucesso');
};

exports.buscarTodosUsuarios = (req, res, next) => {
    UsuarioModel.find({}, function (erro, usuarios) {
        res.send((!erro ? usuarios : erro));
    })
};

exports.editarUsuario = (req, res, next) => {
    Usuario = new UsuarioModel(req.body);
    UsuarioModel.findOneAndUpdate({ _id: req.params.id },
        { $set: { nome: Usuario.nome, email: Usuario.email, senha: Usuario.senha } }, { new: true },
        function (erro, usuarioEditado) {
            res.send((!erro ? usuarioEditado : erro));
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
    UsuarioModel.findOneAndRemove({_id: req.params.id}, function(erro,usuario){
        res.send((!erro ? usuario : erro));
    })
}