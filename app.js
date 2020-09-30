const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', require('./routes'));
app.use('/', require('./routes/curriculo'));

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
