import React from 'react';
import {connect} from 'react-redux';
const SurveyFormReview = ({onCancel, formValues}) => {
      return (
          <div>
             <h5>Please confirn your entries.</h5>
             <div>
                <div>
                   <label>Survey Title</label>
                   <div>{formValues.title}</div>
                </div>
                <div>
                   <label>Survey Subject</label>
                   <div>{formValues.subject}</div>
                </div>
                <div>
                   <label>Survey Body</label>
                   <div>{formValues.body}</div>
                </div>
                <div>
                   <label>Survey Recipient List</label>
                   <div>{formValues.recipients}</div>
                </div>
             </div>
             <button className="yellow white-text btn-flat" onClick={onCancel} >Cancel</button>
             <button onClick={} className="green btn-flat white-text right">
                 Send Survey
                 <i className="material-icons right">email</i>
              </button>
           </div>
       ) 
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps)(SurveyFormReview);