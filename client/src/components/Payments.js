import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render () {
        return (
            // This takes in 2 props. Amount in 500cents which is 5 dollars.
            // Token is the token we receive from stripe. It is a callback function
            <StripeCheckout 
              name = "Surveymann"
              description = "Pay 5 dollars for 5 survey credits."
              amount = {500}
              token = {token => this.props.handleToken(token)}
              stripeKey = {process.env.REACT_APP_STRIPE_KEY}
              >
                <button className = "btn">Add Credits</button>
              </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);