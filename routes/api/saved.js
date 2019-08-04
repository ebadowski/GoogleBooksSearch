'use strict';

// Dependencies
const router = require('express').Router(); // Create a Router instance

// Require all models
const db = require('../../models');

// Routes
// Matches with /api/saved
router.route('/all')
// GET route for all saved books
.get(function (req, res) {
    db.Book.find()
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
})

router.route('/delete/:id')
// GET route for all saved books
.delete(function (req, res) {
    db.Book.deleteOne({id: req.params.id})
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
})

module.exports = router;
