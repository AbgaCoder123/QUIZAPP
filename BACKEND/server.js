// Required Modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const posts = require("./routes/postRoutes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api", posts);

app.listen(process.env.PORT, () => {
  console.log("====================================================");
  console.log(`server is running on this port: ${process.env.PORT}`);
  console.log("====================================================");
});
