var mongoose = require('mongoose')

var student = mongoose.Schema({
  studentId:Number,
  firstName:String,
  lastName:String,
  age:Number
})

var StudentModel = mongoose.model('students',student)

module.exports = StudentModel;