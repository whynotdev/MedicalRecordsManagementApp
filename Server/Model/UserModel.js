const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = mongoose.Schema({
  role:String,
  name: String,
  email:{
    type:String,
    unique:true
  },
  password:String,
  phonenumber:Number,
  
},
{
   timestamps:true
    
  })


//Encrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})
  

//Decrypt
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword.this.password)
}


const UserModel = mongoose.model('Registration',UserSchema)


module.exports = {UserModel}