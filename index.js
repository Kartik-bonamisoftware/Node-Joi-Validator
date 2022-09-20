const express = require("express");

const { validateSignup } = require("./validator");
const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
  const { error, value } = validateSignup(req.body);

  if (error) {
    console.log(error);
    return res.json(error.details);
  }

  res.json("Send....!");
});

app.listen(3800, () => console.log("Server start"));
