const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
// Require all the models. They are a singleton class

require('./models/User');

require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();
app.use(bodyParser.json());


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// This is only for production as there is no create react app.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Kick the user to the client side application.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirnamae, 'client', 'build', 'index.html'));
})



app.listen(process.env.PORT || 5000);