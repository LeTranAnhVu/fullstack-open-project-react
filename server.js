const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static('build'))


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

// start express server on port 3000
app.listen(3000, () => {
  console.log("express server started on port 3000");
});