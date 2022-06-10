const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/api')
const htmlRoutes = require('./routes/html')





// APP USE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

//APP LISTEN
app.listen(PORT, () => {
  console.log(`App has started on port ${PORT}`);
});