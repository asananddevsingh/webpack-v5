const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  // res.send('Some dummy content');
  const htmlFilePath = path.resolve(__dirname, '../dist/index.html');
  const htmlFileContent = fs.readFileSync(htmlFilePath, 'utf-8');
  res.send(htmlFileContent);
});

app.listen(8080, () => {
  console.log('App running at http://localhost:8080');
});
