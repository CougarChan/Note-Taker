// Const Install

const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const notes = require("../../db/db.json");

//api gets and posts code

router.get("/notes", (req, res) => {
  console.log(notes);
  res.send(notes);
});

    router.post("/notes", (req, res) => {
    var request = req.body;
    var array = notes;
    var random = Math.random();
  request.id =
    (array.length * random).toString().slice(2) || random.toString().slice(2);
  array.push(request);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(array, null, 2)
  );
});





module.exports = router;