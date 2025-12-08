// routes/indexRouter.js
const { Router } = require("express");
const { getIndex , getNew , createNew} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getNew);
indexRouter.post("/new", createNew);


module.exports = indexRouter;