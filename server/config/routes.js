const cakes = require('../controllers/cakes.js');

module.exports = function (app) {
    app.get('/cakes', (req, res) => {
        cakes.index(req, res);
    });
    app.get('/cakes/:id', (req, res) => {
        cakes.findme(req, res);
    });
    app.post('/cakes', (req, res) => {
        cakes.create(req, res);
    });
    app.put('/cakes/:id', (req, res) => {
        cakes.edit(req, res);
    });
    // app.delete('/cakes/:id', (req, res) => {
    //     cakes.delete(req, res);
    // });
}