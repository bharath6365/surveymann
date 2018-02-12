import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
 class Header extends Component {
    renderDynamicContent() {
        switch(this.props.auth) {
            case null:
            break;
            case false:
            return (
                <li><a href="/auth/google">Login with google</a></li>
            )
            break;
            case 'Ignore':
            default:
            return [
                <li key={1} ><Payments /></li>,
                <li key = {3} style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
                <li key={2} ><a href="/api/logout">Logout</a></li>
            ]

        }
    }
    render(){
        return(
            <nav>
             <div className="nav-wrapper">
               <Link to={this.props.auth? '/surveys' : '/'}
               className="left brand-logo"
               >
                 SurveyMann                 
               </Link>
               <ul className="right">
                  {this.renderDynamicContent()}
               </ul>
             </div>   
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    // This is the entire state from the store.
    // There is an auth property which lives on the state. State Reducer.
    return {auth}
}


export default connect(mapStateToProps)(Header);
