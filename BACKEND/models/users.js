const conn = require("../config/conn");
const userSchema = new conn.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  fullname: { type: String, required: true },
  avatar: { type: String, required: true },
  subjects: { type: Array, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})
const Userstbl = conn.model('usertbl', userSchema);
module.exports = { Userstbl }