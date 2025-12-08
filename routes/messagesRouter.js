// routes/messagesRouter.js
const { Router } = require("express");
const { getMessage} = require('../controllers/messagesController');

const messagesRouter = Router();

messagesRouter.get("/:messageID", getMessage);


module.exports = messagesRouter;