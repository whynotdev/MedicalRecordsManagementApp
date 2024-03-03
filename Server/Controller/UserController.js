const { UserModel } = require("../Model/UserModel");

exports.userRegister = async (req, res) => {
  const { role,name, email, password, phonenumber,} = req.body

  const userExist = await UserModel.findOne({ email })
  if (userExist) {
    res.status(400).json({ msg: "Email id already exist" })
    return "Already Exists"
  }
  else {
    const newUser = await UserModel.create({ role , name , email, password, phonenumber, })
    res.status(200).json({ msg: "success" })
  }
}