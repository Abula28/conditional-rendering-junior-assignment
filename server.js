const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const user = [
  {
    login: "User1",
    password: "User123",
  },
];

app.get("/", (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      user,
    },
  });
});

const port = 3030;

app.listen(port, () => {
  console.log(
    `App listening on port ${port}; Check out on http://localhost:${port}`
  );
});
