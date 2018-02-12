import React, {Component} from 'react';
// Bring in redux form to the picture. reduxForm can be thought of the connect helper.
// Handle submit is provided by ReduxForm.
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

class SurveyForm extends Component {
    renderFields() {
        return(
            <div>
               <Field type="text" label="Survey Title" name="title" component={SurveyField} />
               <Field type="text" label="Subject Line" name="subject" component={SurveyField} />
               <Field type="text" label="Email Body" name="body" component={SurveyField} />
               <Field type="text" label="Comma Seperated Recipient List" name="recipients" component={SurveyField} />
            </div>
        )
    }
    render() {
        return (
            <div>
             <form onSubmit={this.props.handleSubmit(this.props.formSubmitted)}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">
                  Cancel
                </Link> 
                <button type="submit" className="teal btn-flat right white-text">Next</button>
              </form>
            </div>
        )
    }
}
// Redux Form would return for the returned object.
// If object is empty redux form will think form is valid.
function validate (values) {
  const errors = {};
  generateValidationString(errors, values);
//   Now we need to validate the emails. List of emails will be a comma seperated string.
  if (!values.recipients) {
      errors.recipients = 'You must provide a list of emails';
  } else {
    const emailArray = values.recipients.split(',').map(email => email.trim());
    const filteredEmailArray = emailArray.filter(email => {
       if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
           return true;
       } else {
           errors.recipients = 'Please enter a list of email ids seperated by commas';
       }
    });
  }
  return errors;
}

function generateValidationString (errors, values) {
  const fields = ['title', 'subject', 'body'];
  fields.forEach((item) => {
    if (!values[item]) {
      errors[item] = `You must provide a ${item}`;
    }
  })
}

export default reduxForm({
    validate,
    // This will be available on the store as a property of the state object.
    form: 'surveyForm',
    // Even if Form is not rendered dont destroy the values.
    destroyOnUnmount: false
})(SurveyForm);