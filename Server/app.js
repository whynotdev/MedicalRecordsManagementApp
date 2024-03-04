const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnection, databaseConnection } = require("./Config/DbConnection");
const { userRouter } = require("./route/route");
const dotenv = require("dotenv");
app.use(express.json());
app.use(cors());

const path = require("path");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

databaseConnection();

// const stud ={
//   Name:"Arif",
//   age:"24",
// }

// app.get('/',(req,res)=>{
//   res.send([stud])
// })

app.use("/api/reg", userRouter);

app.listen(process.env.PORT, () => {
  console.log("server is listening in port: 8000");
});
