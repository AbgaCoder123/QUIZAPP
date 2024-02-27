const express = require("express");
const route = express.Router();
const conn = require("../config/conn");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const fs = require("fs").promises;
const path = require("path");
const bycrypt = require("bcrypt");
const { Userstbl } = require("../models/users");
const {
  ValidateStepOne,
  ValidateStepTwo,
  ValidateLogin,
} = require("../middleware/validation");
const session = require("express-session");
route.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
// <=================================== ALL PROMISES ========================================>

// <=================================== REGISTRATION ========================================>
const upload_avatar = (res, req) => {
  return new Promise((resolve, reject) => {
    const ext_type = [".jpg", ".jpeg", ".png", ".bmp"];
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      const { user } = req.session;
      try {
        const img = files.avatar[0];
        if (!img) {
          res.status(400).status("Image is needed");
        } else if (
          img.mimetype.startsWith("image/") &&
          ext_type.includes(path.extname(img.originalFilename))
        ) {
          const fileName =
            new Date().getTime() + path.extname(img.originalFilename);
          const uploadPath = path.resolve("public", "avatar", fileName);
          fs.rename(img.filepath, uploadPath, async (err) => {
            if (err) res.status(400).send("Filepath does not exist");
          });
          req.session.user = { ...user, avatar: fileName };
          res.status(200).send(fileName);
        } else {
          res.status(400).send("Invalid file type or extension");
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    });
  });
};
route.post("/upload-avatar", async (req, res) => {
  const { prev_avatar } = req.query;
  try {
    if (prev_avatar) {
      const filePath = path.join("public", "avatar", prev_avatar);
      const fileExists = await fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);
      if (fileExists) {
        await fs.unlink(filePath);
        upload_avatar(res, req);
      }
    } else {
      upload_avatar(res, req);
    }
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).send("Internal Server Error.");
  }
});
route.post("/remove-avatar", async (req, res) => {
  const { prev_avatar } = req.query;
  try {
    if (prev_avatar) {
      const filePath = path.join("public", "avatar", prev_avatar);
      const fileExists = await fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);
      if (fileExists) {
        await fs.unlink(filePath);
        res.sendStatus(200);
      } else {
        res.status(400)
      }
    } else {
      res.status(400)
    }
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).send("Internal Server Error.");
  }
});
route.post("/register/step1", ValidateStepOne, async (req, res) => {
  const { email, password } = req.body;
  const saltRounds = 10;
  const salt = await bycrypt.genSalt(saltRounds);
  const hashed_password = await bycrypt.hash(password, salt);
  req.session.user = { email, password: hashed_password };
  Userstbl.collection.findOne(
    { email: email.toLowerCase() },
    (err, Userbyemail) => {
      if (err) throw err;
      if (Userbyemail) {
        res.status(400).send("Email already exist");
      } else {
        res.send("Proceed to step 2");
      }
    }
  );
});
route.post("/register/step2", ValidateStepTwo, (req, res) => {
  const { fullname, username } = req.body;
  const { user } = req.session;
  req.session.user = { ...user, fullname, username };
  Userstbl.collection.findOne({ username }, (err, Userbyusername) => {
    if (err) throw err;
    if (Userbyusername) {
      res.status(400).send("username already exist");
    } else {
      res.send("Proceed to step 3");
    }
  });
});

route.post("/register/step3", (req, res) => {
  const { topics } = req.body;
  const { user } = req.session;
  req.session.user = { ...user, topics: JSON.parse(topics) };
  res.send("Proceed to step 4");
});
route.post("/register/step4", async (req, res) => {
  // User select theme which will be handled by the frontend
  await Userstbl.collection.insertOne(req.session.user, (err, result) => {
    if (err) throw err;
    res.send("User registered sucessfully");
  });
  req.session.destroy();
});

// <=================================== LOGIN ========================================>
route.post("/login", ValidateLogin, (req, res) => {
  const { user, password } = req.body;
  Userstbl.collection.findOne(
    { $or: [{ email: user }, { username: user }] },
    async (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(404).send("User not found");
      } else {
        const passwordMatch = await bycrypt.compare(password, user.password);
        if (passwordMatch) {
          res.sendStatus(200);
        } else {
          res.status(404).send("User not found");
        }
      }
    }
  );
});
module.exports = route;
