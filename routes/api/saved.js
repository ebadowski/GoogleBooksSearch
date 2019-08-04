'use strict';

// Dependencies
const router = require('express').Router(); // Create a Router instance

// Require all models
const db = require('../../models');

// // Routes
// // Matches with /api/search
// router.route('/save/:id')
// // GET route for saving a book item by id
// .get(function (req, res) {
//     db.Book.findById(req.params._id)
//         .then(function (item) {
//             res.status(200).json(item);
//         })
//         .catch(function (err) {
//             res.status(500).json(err);
//         });
// })

module.exports = router;
