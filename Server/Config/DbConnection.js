const mongoose = require('mongoose')

const dbConnection = ()=>{}

 mongoose.connect("mongodb://localhost:27017/MedicalRecords").then(()=>{
    console.log("Database Connected")
 })

//Exporting Module
 module.exports = {dbConnection} 