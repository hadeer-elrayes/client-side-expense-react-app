import React, { Component } from 'react';
import {Button} from 'reactstrap'
import {Home} from './pages/home';
import Login from './pages/login';
import Register from './pages/Signup';
import {Route} from 'react-router-dom';
import Navbarr from './components/navbar';
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
      <Container>
      <Navbarr />
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login}  />
      <Route path='/register' component={Register}  />
      </Container> 
      </div>

    )
     
  }
}

export default App;
