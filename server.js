const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const MongoStore = require('connect-mongo')(session);
const passport = require("./passport/index.js");
const PORT = process.env.PORT || 3300;
const morgan = require('morgan');
const Users = require("./models/users");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(express.static("public"));

// Passport
app.use(passport.initialize())
app.use(passport.session()) 
passport.serializeUser(Users.serializeUser()); 
passport.deserializeUser(Users.deserializeUser()); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beyondtheguidebook");
// const connection = mongoose.createConnection(process.env.DB_STRING);
// const sessionStore = new MongoStore({mongooseConnection: connection, collection: 'sessions' })
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true, cookie: {maxAge: 1000 * 30} }));


// Add routes, both API and views
app.get("/Welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/login.html"));
});
app.use("/", routes);

// Connect to the Mongo DB

  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

