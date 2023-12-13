const express = require("express");
const app = express();

// we pass the name of the folder, files in that server can now be served
// app.use(express.static("public"));
app.set("view engine", "ejs");
// we can set middleware with app.use if we want it run everywhere
// app.use(logger);
app.use(express.urlencoded({ extended: true }));

//we can set middleware passing it as an arg
app.get("/", logger, (req, res) => {
  res.render("index", { text: "haii" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

//middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
