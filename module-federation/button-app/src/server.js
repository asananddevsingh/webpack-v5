const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  // res.send('Some dummy content');
  const htmlFilePath = path.resolve(__dirname, '../dist/buttonApp.html');
  const htmlFileContent = fs.readFileSync(htmlFilePath, 'utf-8');
  res.send(htmlFileContent);
});

app.listen(9001, () => {
  console.log('App running at http://localhost:9001');
});
