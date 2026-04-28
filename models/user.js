const { required } = require("joi")
const mongoose= require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
     email : {
        type : String,
        required : true
     },
     username : {
      type : String,
        required : true,
        minLength:3,
        maxLength:20
     },
     role : {
      type: String,
      required:true
     }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema)