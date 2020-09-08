const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

app.use(bodyParser.json());

// app.use( '*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../dist/index.html'))
// });

app.listen(PORT, () => {
  console.log(`now listening on ${PORT}`)
}) 