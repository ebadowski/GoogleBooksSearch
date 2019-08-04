'use strict';

// Dependencies
const router = require('express').Router(); // Create a Router instance

// Require all models
const db = require('../../models');

// Routes
// Matches with /api/search
router.route('/save')
    // GET route for saving a book item by id
    .post(function (req, res) {
        db.Book.init()
            .then(() =>
            db.Book.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
            })
            .catch(function (err) {
                res.status(500).json(err);
            })
            )
        
    });

module.exports = router;
