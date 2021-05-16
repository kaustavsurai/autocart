import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {Row, Col, Container} from 'react-bootstrap';
import PaytmIcon from '../../assets/paytm.png';
// import PhonePeIcon from '../../assets/PhonePe.png';

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const {stripe, elements} = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
      window.location.href = "/Message";
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  render() {
    const {stripe} = this.props;
    return (
      <div className="bg-image">
        <div className="Payment ">
          
          <div className="form-box payment-box bg-white">
            <Container >
              <Row>
                <Col lg={3} className="d-flex align-items-center justify-content-center">
                    {/* <div className="bg-light m-2 w-100">
                        <img src={PaytmIcon} alt='Paytm' className="payment-icons"/>
                    </div> */}
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                    <div className="bg-light m-2 w-100">
                        <img src={PaytmIcon} alt='Paytm' className="payment-icons"/>
                    </div>
                </Col>
                <Col lg={3} className="d-flex align-items-center justify-content-center">
                  {/* <div className="bg-light m-2 w-100">
                      <img src={PhonePeIcon} alt='Phonepe' className="payment-icons"/>
                  </div> */}
                </Col>
              </Row>
            </Container>
            <form className="" action="http://localhost:4000/paynow" id="idForm" method="post">
              <div className="form-group text-left">
                <label for="">Amount: </label>
                <input className="form-control" placeholder="Enter Amount" type="text" name="amount" />
              </div>
              <div class="form-group">
                <button class="btn form-control btn-primary">Pay Now</button>
              </div>
            </form>
            {/* <h6 className="text-left">Choose Payment :</h6>
            <Container >
              <Row>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                  <a className="w-100" href="http://localhost:4000/">
                    <div className="bg-light m-2 w-100">
                        <img src={PaytmIcon} alt='Paytm' className="payment-icons"/>
                    </div>
                  </a>
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                  <div className="bg-light m-2 w-100">
                      <img src={PhonePeIcon} alt='Phonepe' className="payment-icons"/>
                  </div>
                </Col>
              </Row>
            </Container>
            <h6 className="text-left">Card :</h6>
            
            <form onSubmit={this.handleSubmit} className="mt-4">
              <CardElement />
              <button className="btn btn-primary mt-5 w-100" type="submit" disabled={!stripe}>
                Pay Now
              </button>
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);

const stripePromise = loadStripe('pk_test_51IhuDkSDnJ5tscRm1m9wlpvMTdX1eurKGxkNRmN6U5ly4du9GSxR7ETfZeTDWvphXFMQdi6gDTMDwvakkpfb3CQ8001CoxK1Ut');

const App = () => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
);

export default App;