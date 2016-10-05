import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from './common/Footer.js';
import Header from '../components/common/Header';
import Notifications from 'react-notification-system-redux';

const { object, array } = PropTypes;

class App extends Component {
  render() {
    const footerText = 'DistiBot - Universidad ORT Uruguay';
    const { pathname } = this.props.location;
    const { notifications } = this.props;
    const haveHeader = !(pathname.includes('login'));

    return (
      <div className="h-100">
        <Notifications notifications={ notifications }/>      
        { haveHeader ? <Header user={ this.props.user }/> : '' }
        <div className="content">
          { this.props.children }
        </div>
        <Footer text={ footerText } />
      </div>
    );
  }
}

App.contextTypes = {
  store: object
}

App.propTypes = {
  children: object.isRequired,
  location: object.isRequired,
  user: object.isRequired,
  notifications: array
};

const mapState = (state) => ({ user: state.user, notifications: state.notifications });

export default connect(mapState)(App);
