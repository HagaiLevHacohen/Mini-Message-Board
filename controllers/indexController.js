// controllers/authorController.js

const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getIndex = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages)
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const getNew = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages)
  res.render("form", { title: "New Message", messages: messages });
};

const createNew = async (req, res) => {
  const newMsg = {
  text: req.body.messageText,
  user: req.body.messageUser,
  added: new Date()
};
  await db.insertMessage(newMsg)
  res.redirect("/");
};


module.exports = { getIndex , getNew , createNew};
