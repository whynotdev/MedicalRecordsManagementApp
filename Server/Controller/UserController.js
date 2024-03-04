const { genarateToken } = require("../Config/genarateToken");
const { UserModel } = require("../Model/UserModel");
const asyncHandler = require("express-async-handler");

exports.userRegister = asyncHandler(async (req, res) => {
  const { role, name, email, password, phonenumber, doctorId, dob,gender } = req.body;

  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    res.status(400);
    res.json({ msg: "already exists the user" });
    throw new Error("Alredy Exists");
  }

  const newUser = await UserModel.create({
    role,
    name,
    email,
    password,
    phonenumber,
    doctorId,
    dob,
    gender
  });
  if (newUser) {
    res.status(200).json({ msg: "success", token: genarateToken(newUser._id) });
  } else {
    res.status(400).json({ msg: "error" });
  }
});



exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;
  const user = await UserModel.findOne({ email });
  const userPass = await UserModel.findOne({ password});

  if (!user) {
    res.status(400).json({ msg: "Invalid user" });
    throw new Error("Invalid user");
  }
  if (user.role !== role) {
    res.status(400).json({ msg: "Invalid role" });
    throw new Error("Invalid role");
  }

  if (user && userPass) {
    return res.status(200).json({ msg:"success"});
  } else {
    return res.status(400).json({msg:"Invalid email or password"})
  }

});

