const express = require("express");
const indexRouter = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "He He",
    user: "sanatan",
    added: new Date()
  },
  {
    text: "Hii, this is a very very long text because i just love to write and i have a preaty much waste time to spend on.",
    user: "fool",
    added: new Date()
  }
];


indexRouter.get("/new", (req, res) => {
  res.render('form');
})

indexRouter.post("/new", (req, res) => {
    const name = req.body.author;
    const message = req.body.message;
    messages.push({
      text: message,
      user: name,
      added: new Date()
  })
  res.redirect('/');
})

indexRouter.get("/", (req, res) => { 
  res.render("index", { messages: messages });
})

module.exports = indexRouter;