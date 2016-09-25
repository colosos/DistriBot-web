// This component handles the App template used on every page.
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from './common/Footer.js';
import Header from '../components/common/Header';

const { object } = PropTypes;

class App extends Component {
  render() {
    const footerText = 'DistiBot - Universidad ORT Uruguay';
    const { pathname } = this.props.location;
    const haveHeader = !(pathname.includes('login'));

    return (
      <div className="h-100">        
        { haveHeader ? <Header user={this.props.user}/> : '' }
        <div className="content">
          {this.props.children}
        </div>
        <Footer text={footerText} />
      </div>
    );
  }
}

App.propTypes = {
  children: object.isRequired,
  location: object.isRequired,
  user: object.isRequired
};

const mapState = (state) => ({ user: state.user });

export default connect(mapState)(App);
