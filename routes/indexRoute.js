const express = require("express");
const indexRouter = express.Router();
const db = require("../database/query")


indexRouter.get("/new", (req, res) => {
  res.render('form');
})

indexRouter.post("/new", async(req, res) => {
  const author = req.body.author;
  const message = req.body.message;
  await db.insertMessage(message, author);
  res.redirect('/');
})

indexRouter.get("/", async(req, res) => { 
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
})

module.exports = indexRouter;