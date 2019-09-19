const express = require("express");
const app = express();

require('./server/config/mongoose.js'); //server connection

const session = require('express-session');
app.use(session({
  secret: 'fiblubber',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(express.json());

require('./server/config/routes.js')(app);

// app.use(express.static(__dirname + "/static"));
app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(5000, () => console.log("listening on port 5000"));