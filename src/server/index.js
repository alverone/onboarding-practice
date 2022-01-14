const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const validateUser = require("./validateUser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/user", (req, res) => {
  const body = req.body;

  const { hasErrors, errors } = validateUser(body);

  if (hasErrors) {
    res.status(400).json({ message: "Errors were found", errors: errors });
  } else {
    res.status(200).json({ message: "User OK!", errors: false });
  }
});

let port = 8001;
app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
