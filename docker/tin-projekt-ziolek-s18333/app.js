var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Routes
var indexRouter = require('./routes/index');
const characterRouter = require('./routes/characterRoute');
const eventRouter = require('./routes/eventRoute');
const activityRouter = require('./routes/activityRoute');

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });

const charApiRouter = require('./routes/api/CharacterApiRoute');
const actApiRouter = require('./routes/api/ActivityApiRoute');
const eventApiRouter = require('./routes/api/EventApiRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/character', characterRouter);
app.use('character/add', characterRouter);
app.use('character/details', characterRouter);
app.use('character/edit', characterRouter);

app.use('/event', eventRouter);
app.use('event/add', eventRouter);
app.use('event/details', eventRouter);
app.use('event/edit', eventRouter);

app.use('/activity', activityRouter);
app.use('activity/add', activityRouter);
app.use('activity/details', activityRouter);
app.use('activity/edit', activityRouter);

//Sequelize routers:
app.use('/api/characters', charApiRouter);
app.use('/api/activities', actApiRouter);
app.use('/api/events', eventApiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
