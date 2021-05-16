import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/appbar/Appbar';
import Footer from './components/footer/Footer';
import Login from './components/parts/Login';
import Garrage from './components/parts/Garrage';
import PaymentGateway from './components/parts/PaymentGateway';
import Message from './components/parts/Message';


import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <AppBar />
      
        <Switch>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/Garrage"  component={Garrage} /> 
          <Route exact path="/Payment"  component={PaymentGateway} /> 
          <Route exact path="/Message"  component={Message} /> 
        </Switch>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
