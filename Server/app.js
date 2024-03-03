const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnection } = require("./Config/DbConnection");
const { userRouter } = require("./route/route");

app.use(express.json())
app.use(cors())


dbConnection()

// const stud ={
//   Name:"Arif",
//   age:"24",
// }

// app.get('/',(req,res)=>{
//   res.send([stud])
// })

app.use('/api/reg',userRouter)

app.listen(8000,()=>{
  console.log('server is listening in port: 8000')
})