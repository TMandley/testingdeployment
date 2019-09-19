const mongoose = require('mongoose');
const Cake = require('../models/cake.js')

module.exports = {
    index: function (req, res) {
        Cake.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    findme: function (req, res) {
        Cake.findOne({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        Cake.create(req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    edit: function (req, res) {
        Cake.updateOne({_id: req.params.id}, {
            $push: {rating: req.body.rating, comments: req.body.comments}
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => res.json(err));
    },
    // delete: function (req, res) {
    //     Cake.remove({_id: req.params.id})
    //         .then(data => {
    //             res.json(data)
    //         })
    //         .catch(err => res.json(err));
    // },
}
//working update...
// Cake.updateOne({_id: req.params.id}, {
//     $push: {rating: req.body.rating},
//     $push: {comments: req.body.comments}
// })
//     .then(result => {
//         res.json(result)
//     })
//     .catch(err => res.json(err));