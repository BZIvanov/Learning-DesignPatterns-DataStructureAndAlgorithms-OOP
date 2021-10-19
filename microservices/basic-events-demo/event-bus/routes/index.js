const router = require('express').Router();
const { getEvents, createEvent } = require('../controllers');

router.route('/events').get(getEvents).post(createEvent);

module.exports = router;
