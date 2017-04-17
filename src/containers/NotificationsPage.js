import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationList from '../components/notifications/NotificationList'

class NotificationsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className='container' style={ {padding: '10px 30px'} }>
        <h2>Anomalías</h2>
        <NotificationList />
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(NotificationsPage);
