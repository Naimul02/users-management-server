const express = require("express");
const app = express();
const cors = require("cors");
//tumi jodi kono server a deploy koro 5000 port onekei use korte pare sobai re  ei port dite parbe na tokhon precess.env.PORT eta use korle deploy korar somoy tara nijeder moto port toiri kore nibe.ar eta korle amader deployment a kono somossa hobe na.
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Sabnoor", email: "Sabnoor@gmail.com" },
  { id: 3, name: "Sabila", email: "Sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users Management server is running");
});

// egular nam api
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser)
});

app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
