// SurveyNew shows SurveyForm and SurveyReview
import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
        this.formSubmitted=this.formSubmitted.bind(this);
        this.state = {showFormReview : false};
    }
    formSubmitted (){
         this.setState({showFormReview: true});
    }
    renderContent() {
        if (this.state.showFormReview === false) {
            return <SurveyForm formSubmitted = {this.formSubmitted} />
        } else {
            return <SurveyFormReview onCancel={()=> this.setState({showFormReview: false})}/>
        }    
        
    }
    render() {
        return (
            <div>
              {this.renderContent()}
            </div>
        )
    }
}

export default SurveyNew;