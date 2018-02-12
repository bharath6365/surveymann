const keys = require('../../config/keys');

module.exports = function(surveyInstance) {
  return `
    <html>
       <body>
           <div style="text-align:center;">
              <h3>We'd love your input</h3>
              <p>Please answer the following question:</p>
              <p>${surveyInstance.body}</p>
              <div>
                <a href="${keys.sendGridRedirect}/api/surveys/feedback">Yes</a>
              </div>
              <div>
                <a href="${keys.sendGridRedirect}/api/surveys/feedback">No</a>
              </div>
           </div>
       </body>
    </html> 
  
  `;
};