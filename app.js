const express = require("express");
const tourRouter = require("./routes/tourRoutes");
const app = express();

// Parse JSON data in incoming requests
app.use(express.json());

// Creating your own middleware
app.use((req, res, next) => {
  console.log("Hello from the middleware...");
  next();
});

app.use("/api/v1/tours", tourRouter);

// const server = app.listen(3000, () => {
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log("App is running on port: " + port);
// });
module.exports = app;
