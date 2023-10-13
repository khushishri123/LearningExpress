const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app.js");
const Tour = require("./models/tourModel");

//in this file we only need those things that are needed to connect to the db

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// to connect we provided the DB and options, these options are optional,
//it returns a promise to us
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    console.log(conn.connections);
    console.log("DB Connection Successful");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application is running on port: ${port} ...`);
});
