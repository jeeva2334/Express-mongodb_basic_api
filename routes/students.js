var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const StudentModel = require('../models/stu.mod')

/* GET users listing. */

router.post('/add', function(req, res, next) {


    let newStudent = new StudentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })

    newStudent.save(function(err,newStudent){
        if(err) res.send(err)
        else res.send({status:200,message:'sucessfully uploaded',studentObj: newStudent});
    })
});

router.get('/list', function(req, res, next) {
    StudentModel.find(function(err,response){
        if(err) res.send(err)
        else res.send({status:200,studentObj: response});
    })
});

router.get('/searchbyname', function(req, res, next) {
    const firstName= req.query.firstName
    StudentModel.find({firstName:firstName},function(err,response){
        if(err) res.send(err)
        else res.send({status:200,resultsFound:response.lenght ,studentObj: response});
    })
});

router.get('/',(req,res)=>{
    res.send("Its working")
})

module.exports = router;
