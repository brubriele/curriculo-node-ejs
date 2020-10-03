const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const createError = require('http-errors');

app.use(express.static(path.join(__dirname, 'public')));

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', require('./routes'));
app.use('/', require('./routes/curriculo'));

// app.listen(port, (err) => {
//   console.log(`Server is listening on ${port}`);
// });

app.listen(process.env.PORT || port, () => console.log('Server is running...'));

// Handling errors
// 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
