const express = require("express");
const app = express();

const debug = require("debug")("my-application");
const bodyParser = require("body-parser");

const users = require("./routes/user");
const auth = require("./routes/auth");

app.use(bodyParser.json());
app.use("/api/user", users);
app.use("/api/auth", auth);

app.listen(3031, (req, res) => {
  debug("server open");
});
