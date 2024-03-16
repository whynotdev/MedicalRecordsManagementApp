const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const patientsRoute = require("./routes/patientsRoute");
const path = require("path");
// const PatientModel = require("./models/patientsModel");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/patient", patientsRoute);
// http:\\localhost:5000/api/patient/create-patient-record

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server Started at ${port}!`));
