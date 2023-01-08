import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
//import { Navbar, NavbarBrand } from 'reactstrap';
import { HashRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return(
      <HashRouter>
          <div style={{height: "100%"}}>
            <Main />
          </div>
      </HashRouter>
    );
  }
  
}

export default App;
