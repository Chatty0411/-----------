import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import Myheader from './components/alwaysUse/Myheader';
import Myfooter from './components/alwaysUse/Myfooter';

import './carousel.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/src/carousel';
import 'bootstrap/dist/js/bootstrap.bundle';

import './MyhomewkIndex.css';
import MyhomewkIndex from './components/MyhomewkIndex';


import './Myhomewkorder.css';
import Myhomewkorder from './components/Myhomewkorder';


import Myhomewkcreate from './components/Myhomewkcreate';






class App extends Component {
  state = {  } 
  render() { 
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={MyhomewkIndex} exact />
          <Route path="/index" component={MyhomewkIndex} />
          <Route path="/order" component={Myhomewkorder} />
          <Route path="/create" component={Myhomewkcreate} />

          <Route path="/footer" component={Myfooter} />
          <Route path="/header" component={Myheader} />
        </Switch>
      </HashRouter>
    );
  }
}
 
export default App;