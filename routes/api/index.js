//Const install required things
const router = require("express").Router();
const path = require("path");
const notes = require('./notes')

router.use(notes)

module.exports = router