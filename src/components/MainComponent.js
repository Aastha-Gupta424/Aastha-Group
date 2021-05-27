import React, { Component } from 'react';
import Header from './Header';
import Home from './HomeComponent'
import Footer from './Footer';

class Main extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}
export default Main;