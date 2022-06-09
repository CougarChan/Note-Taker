const express= require ('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;

const app = express();
const {notes}  = require('./db/db.json')


app.get('/api/', (req, res) => {
    res.json (diffNotes.slice(1));
}); 






























app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
  });