var ModuloModel = require('../../model/moduloModel');
var Modulo = new ModuloModel();

exports.salvarModulo = (req, res, next) => {
    Modulo = new ModuloModel(req.body);
    Modulo.save();
    res.send('Módulo salvo com sucesso!');
};

exports.buscarTodosModulos = (req, res, next) => {
    ModuloModel.find({}, function (erro, modulos) {
        res.send(!erro ? modulos : erro);
    })
};

exports.buscarTodosModulosPorSistema = (req, res, next) => {
    ModuloModel.find({ sistemaID: req.params.sistemaID }, function (erro, modulos) {
        res.send(!erro ? modulos : erro);
    })
};

exports.buscarModulosSemSistema = (req, res, next) => {
    ModuloModel.find({ sistemaID: 0 }, function (erro, modulos) {
        res.send(!erro ? modulos : erro);
    })
};

exports.checarPermissao = (req, res, next) => {
    res.send({tokenExpirado:false, permissao:true, permiteAnonimo:false});
}