// controllers/authorController.js

const messages = require("../models/messages");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessage = (req, res) => {
  res.render("message", {message: messages[req.params.messageID] });
};



module.exports = { getMessage};
