import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firebase from "../../firebase";

export default class PhoneLogin extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      alert: false,
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.setUpRecaptcha();
    let phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        // console.log("Result" + result.verificationID);
        // let user = result.user;
        window.location.href = "/Garrage";
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  render() {
    return (
      <div className="bg-image">
        <Container fluid="sm" className="form-container">
          <div className="form-box">
            <Row className="justify-content-center">
              <Col xs={12} md={12} lg={12}>
                <h2 className="mb-3 text-white mt-2">Login</h2>
                <Form className="form" onSubmit={this.onSignInSubmit}>
                  <div id="recaptcha-container"></div>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      name="mobile"
                      placeholder="Mobile Number"
                      onChange={this.onChangeHandler}
                      required
                    />
                  </Form.Group>
                  <button className="btn btn-primary" button="Submit" type="submit">submit</button>
                </Form>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} md={12} lg={12}>
                <h2 className="mb-3 text-white mt-2">Enter OTP</h2>
                <Form className="form" onSubmit={this.onSubmitOtp}>
                  <Form.Group>
                    <Form.Control
                      id="otp"
                      type="number"
                      name="otp"
                      placeholder="OTP"
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>
                  <button className="btn btn-primary" button="Submit" type="submit">submit</button>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
