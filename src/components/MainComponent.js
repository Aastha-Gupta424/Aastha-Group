import React, { Component } from 'react';
import Header from './Header';
import Home from './HomeComponent'
import Footer from './Footer';
import Log from './LoginComponent';
import Reg from './RegisterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div>
        <Header />
        <Switch location={this.props.location}>
                  <Route path='/home' component={Home} />
                  {/* <Route exact path='/aboutus' component={AboutPage}/>
                  <Route exact path='/scheme' component={SchemePage} />*/}
                  <Route exact path='/register' component={Reg} /> 
                  <Route exact path='/login' component={Log} />
                  <Redirect to="/home" />
              </Switch>
        <Footer />
      </div>
    )
  }
}
export default Main;