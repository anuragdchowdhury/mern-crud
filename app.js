require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRouter");
const cors = require('cors');

const app = express();

// Middlware
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(3001, () => {
console.log("Application Serving at Port 3001");
});

// Mongo DB Connection
mongoose.connect(
    // `mongodb://${process.env.MONGODB_URI}/users` || "mongodb://localhost/users",
    "mongodb://localhost/users",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Connected to MongoDB");
        }
      }
);

module.exports = app;