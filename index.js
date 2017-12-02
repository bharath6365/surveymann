const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
// Tell passport to use google stratgey
passport.use(new GoogleStrategy());

app.listen(process.env.PORT || 5000);