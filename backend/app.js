const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const connectDB = require("./db/connection");

//Routes
const userRoute = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoute);
app.use("/captains", captainRoutes);

module.exports = app;
