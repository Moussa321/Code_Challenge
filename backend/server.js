require("dotenv").config();

const express = require("express");
const customersRoutes = require("./routes/customers");
const phoneNumberRoutes = require("./routes/phoneNumber");

const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/customers", customersRoutes);
app.use("/phoneNumber", phoneNumberRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to DB and listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error occured in Mongo :", err);
  });
