const express = require('express');
const router = express.Router();
const db = require('../models');
const middleware = require('../middleware');
const { loggedIn } = middleware;

//school 
router.get('/',loggedIn, (req, res) => {
    db.School.find()
        .then((school) => res.json(school))
        .catch((err) => res.send(err));
});

// school home route
router.post('/',loggedIn, (req, res) => {
    db.School.create(req.body)
        .then(res.redirect('/home'))
        .catch((err) => res.send(err))
});

// school show
router.get('/:id', (req, res) => {
    let id = req.params.id;
    db.School.findById(id)
        .then((school) => res.json(school))
        .catch((err) => res.send(err))
});

// update school
router.put('/:id', (req, res) => {
    db.School.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((school) => res.json(school))
        .catch((err) => res.send(err))
});

//delete school

router.delete('/:id', (req, res) => {
    db.School.remove({ _id: req.params.id })
        .then(res.send("removed"))
        .catch((err) => res.send(err))
});


module.exports = router; 
