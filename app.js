var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username }, function (err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
      return done(null, user);
    }
  );

const connectionString = "mongodb+srv://admin:admin@cluster0.hxyu1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose = require('mongoose');
mongoose.connect(connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true });

var Costume = require("./models/costume");
var Dog = require("./models/dogs");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dogRouter = require('./routes/dog');
var dogsRouter = require('./routes/dogs');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dog', dogRouter);
app.use('/dogs', dogsRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter)
app.use('/resource', resourceRouter);

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());

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

/// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Costume.deleteMany();

  let instance1 = new Costume({ costume_type: "Mummy", size: 'large', cost: 25.4 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved in Costume")
  });

  let instance2 = new Costume({ costume_type: "Dog", size: 'small', cost: 16 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved in Costume")
  });

  let instance3 = new Costume({ costume_type: "Superman", size: 'medium', cost: 12.4 });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved in Costume")
  });

  let instance4 = new Costume({ costume_type: "Cat", size: 'large', cost: 22 });
  instance4.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Fourth object saved in Costume")
  });

// Delete everything in Dog
  await Dog.deleteMany();

  let instance5 = new Dog({ dog_bread: "German Sheperd", dog_color: 'Black', dog_cost: 750 });
  instance5.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved in Dog")
  });

  let instance6 = new Dog({ dog_bread: "Beagle", dog_color: 'Light White', dog_cost: 450 });
  instance6.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved in Dog")
  });

  let instance7 = new Dog({ dog_bread: "Bull Dog", dog_color: 'Mixed', dog_cost: 1000 });
  instance7.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved in Dog")
  });

  let instance8 = new Dog({ dog_bread: "Boxer", dog_color: 'Dark', dog_cost: 950 });
  instance8.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Fourth object saved in Dog")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () { console.log("Connection to DB succeeded") });