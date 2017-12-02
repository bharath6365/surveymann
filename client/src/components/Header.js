import React, {Component} from 'react';
export default class Header extends Component {
    render(){
        return(
            <nav>
             <div className="nav-wrapper">
               <a className="left brand-logo">
                 SurveyMann                 
               </a>
               <ul className="right">
                  <a>Login with google</a>
               </ul>
             </div>   
            </nav>
        )
    }
}