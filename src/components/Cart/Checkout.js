import React from "react";
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
    onToken = (token) => {
      fetch('https://backendapi.turing.com/stripe/charge', {
        method: 'POST',
        body: JSON.stringify(token),
      }).then(response => {
        response.json().then(data => {
          alert(`Payment successful`);
          this.props.clearCart();
          this.props.history.push("/");
        });
      });
    }
  
    render() {   
      return (
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_NcwpaplBCuTL6I0THD44heRe"
          amount={this.props.amount}
        />
      )
    }
  }