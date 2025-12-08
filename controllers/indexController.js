// controllers/authorController.js

const messages = require("../models/messages");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getIndex = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const getNew = (req, res) => {
  res.render("form", { title: "New Message", messages: messages });
};

const createNew = (req, res) => {
  const newMsg = {
  text: req.body.messageText,
  user: req.body.user,
  added: new Date()
};
  messages.push(newMsg);
  res.redirect("/");
};


module.exports = { getIndex , getNew , createNew};
