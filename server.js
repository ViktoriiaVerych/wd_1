const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('no endpoint');
});

app.get('/get', (req, res) => {
    res.send('response u c.');
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});