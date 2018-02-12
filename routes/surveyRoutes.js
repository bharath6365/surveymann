const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const isLoggedIn = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
module.exports = (app) => {
   app.get('/api/surveys/feedback', (req, res) => {
      res.send('Thanks a lot for your feedback');
   });
   app.post('/api/surveys', isLoggedIn, requireCredits ,async (req, res) => {
    //   We wanna make sure that user is logged in and they have enough credits.
    const { title, subject, body, recipients } = req.body;
    let surveyInstance = new Survey({
        title,
        subject,
        body,
        // For recipients we need to create an array of objects with email property.
        // We currently have an array of strings.
        recipients: recipients.split(',').map(email => ({ email: email })),
        _user: req.user.id,
        dateSent: Date.now()
    });
    // We need to send the email and make sure it got sent before we make sure we save the survey to the database.
    const mailer = new Mailer(surveyInstance, surveyTemplate(surveyInstance));
    try {
        await mailer.send();
        await surveyInstance.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);
    } catch (e) {
       res.status(422).send(e);
    }
   });
};