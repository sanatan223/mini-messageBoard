const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require("./routes/indexRoute.js");
const path = require("node:path");



app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRouter)


app.listen(port, console.log(`App is listening on port${port}`))