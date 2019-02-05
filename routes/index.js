const express = require('express');
var router = express.Router();

const { Users, Roles } = require('../database/db');

router.get('/users', (req, res) => {
    Users.findAll({ where: { deleted: 0 }}).then(data => {
        res.send(JSON.stringify(data));
    }).catch(err => {
        console.log(err);
    });
});

router.get('/users/:id', (req, res) => {
    Users.findAll({ where: {id: req.params.id }}).then(data => {
        res.send(JSON.stringify(data));
    }).catch(err => {
        console.log(err);
    });
});

router.put('/users/:id', (req, res) => {
    let name = req.body.name,
    surname = req.body.surname,
    password = req.body.password,
    login = req.body.login,
    roleid = req.body.roleid,
    birthdate = req.body.birthdate;
    Users.findOne({ where: {id: req.params.id }}).then(user => {
       user.update({
           name: name,
           surname: surname,
           birthdate: birthdate,
           login: login,
           password: password, 
           roleid: roleid
       });
    }).catch(err => {
        console.log(err);
    })
});

router.patch('/users/:id', (req, res) => {
    let id = req.params.id;
    Users.findOne({ where: {id: id}}).then(user => {
        user.update({
            deleted: 1
        });
    }).catch(err => {
        console.log(err);
    })
}) 

router.get('/roles', (req, res) => {
    Roles.findAll().then(data => {
        res.send(JSON.stringify(data));
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;