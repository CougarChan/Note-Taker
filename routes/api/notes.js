const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const notes = require("../../db/db.json");

//api get and post code

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

/* couldnt figure this part out, the db.json file gets rewritten with new data
 excluding the deleted note but unless I stop and restart the server, that data doesn't
 get saved on the webpage.
 Using Nodemon instead of npm to run and automatically restart the server yields
 the proper results
*/



module.exports = router;