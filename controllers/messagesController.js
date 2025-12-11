// controllers/authorController.js

const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessage = async (req, res) => {
  const message = await db.getMessage(req.params.messageID);
  console.log(message)
  res.render("message", {message: message});
};



module.exports = { getMessage};
