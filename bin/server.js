const app = require('../src/app');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/my_database';
const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

app.listen(port, function () {
    startDb();
    console.log(`app listening on port ${port}`)
})

function startDb() {
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    console.log('MongoDB Conectado!');
}