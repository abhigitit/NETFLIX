const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World, Im building Netflix");
});

app.use("/API/auth", authRoute);
app.use("/API/users", userRouter);
app.use("/API/movies", movieRouter);

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
