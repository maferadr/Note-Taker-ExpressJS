const router = require('express').Router();

//Import modular routers for /notes
const notesTaken = require('./notes');
router.use('/notes', notesTaken);

module.exports = router;