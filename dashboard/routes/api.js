const express = require('express');
const router = express.Router();
const UserData = require('../models/data');

router.get('/userdata', (req, res, next) => {
    UserData
		.find({}, 'item')
		.then(data => res.json(data))
		.catch(next)
});

router.post('/userdata', (req, res, next) => {
    if (req.body.item) {
        UserData
            .create(req.body)
            .then(data => res.json(data))
            .catch(next);
    }
    else {
        res.json({ error: "The item field is empty" })
    }
});

router.delete('/userdata/:id', (req, res, next) => {
    UserData.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;