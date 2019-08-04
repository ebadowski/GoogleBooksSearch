'use strict';

// Dependencies
const router = require('express').Router(); // Create a Router instance

// Require all routes
const search = require('./search');
const saved = require('./saved');

// Routes
router.use('/search', search);
router.use('/saved', saved);

module.exports = router;
