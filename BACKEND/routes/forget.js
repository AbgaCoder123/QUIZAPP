const express = require("express");
const route = express.Router();
const conn = require("../../database/conn");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
require("dotenv").config();
const validate_email = require("../../middleware/validate_email");
const {
  reset_token_authentication,
} = require("../../middleware/Authentication");
const validate_reset = require("../../middleware/validate_reset");
route.post("/forgetpassword", validate_email, (req, res) => {
  const { email } = req.body;
  const select_query = "select user_id from users where email = ?";
  conn.query(select_query, [email], (err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      const token = jwt.sign(
        { user_id: data[0].user_id },
        process.env.secretKey,
        {
          expiresIn: 300,
        }
      );
      const resetLink = `/access/resetpassword?token=${token}`;
      res.header("x-reset-token", token);
      res.send(resetLink);
    } else {
      res.status(404).send("Email does not exist");
    }
  });
});
route.post(
  "/reset-password",
  validate_reset,
  reset_token_authentication,
  async (req, res) => {
    const { password } = req.body;
    const saltRounds = 10;
    const salt = await bycrypt.genSalt(saltRounds);
    const hashed_password = await bycrypt.hash(password, salt);
    const update_query = "update users set password = ? where user_id = ?";
    conn.query(
      update_query,
      [hashed_password, req.reset_token.user_id],
      (err, data) => {
        if (err) throw err;
        if (data.affectedRows > 0) {
          res.sendStatus(200);
        }
      }
    );
  }
);
module.exports = route;
