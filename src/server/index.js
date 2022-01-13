const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const app = express();

app.use(bodyParser.json());

app.use(cors());

// solution you're looking for
app.post("/", function (req, res) {
  console.log(req.body); // req data
  res.json({ message: "No errors found" });
});

app.post(
  "/user",
  body("email", "Invalid email.").isEmail().exists(),
  body("firstName", "First name is too long or too short.").isLength({
    min: 2,
    max: 50,
  }),
  body("lastName", "Last name is too long or too short.").isLength({
    min: 2,
    max: 50,
  }),
  body("bio", "Bio is too long.").isLength({ max: 500 }),
  body("country", "Invalid country option.").exists().notEmpty().isString(),
  body("tos", "Terms of Service not accepted").isIn([true]),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Validation not passed", errors: errors.array() });
    }
    res.status(200).json({ message: "User OK!", errors: false });
  }
);

let port = 8001;
app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
