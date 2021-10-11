const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: String,
  createddate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", UserSchema);
