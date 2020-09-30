const express = require('express');
const port = 3000;
const app = express();

app.get('/', (rew, res, next) => {
  res.send({
    title: 'Meu primeiro servidor Express',
    version: '0.0.0',
  });
});

app.listen(port, (ett) => {
  console.log(`Server is listening on ${port}`);
});
