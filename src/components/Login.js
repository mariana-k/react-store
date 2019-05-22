import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
  render() {
    const componentClicked = () => {
        alert("Login button clicked")
    }

    const responseFacebook = (response) => {
        console.log(response)
            if (response.authResponse) {
              fetch("https://backendapi.turing.com/customers/facebook", { access_token: response.authResponse.accessToken }, function (data) {
                console.log(JSON.stringify(data));
              });
            } else {
              alert('User cancelled login or did not fully authorize.');
            }
          
          return false
      }
    return (
        <div>
            <FacebookLogin
                appId="352854622106208"
                autoLoad={true}
                fields="name,email,picture"
                cookie="true"
                xfbml="true"
                onClick={componentClicked}
                callback={responseFacebook} />
        </div>
    )
  }
};