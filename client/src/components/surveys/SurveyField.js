// SurveyField is used to render a single input and label.
import React from 'react';
// Meta is used to retrieve validation errors.
// Validation function runs on form render. So we make use of touched property on meta
// object to verify user touched the input field.
export default ({input, label , meta}) => {
    return (
        <div>
           <label>{label}</label>
           <input {...input} style={{marginBottom: '5px'}} />
           <div className="red-text" style={{marginBottom: '20px '}}>
             {meta.touched && meta.error}
           </div>
        </div>
    );
}