import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationItem from './NotificationItem';
import * as notificationsActions from '../../actions/notificationsActions';

class NotificationList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.actions.loadNotifications();
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications) {
      this.setState({ loading: false });
    }
  }

  cleanNotificationsData(notificationList) {
    var listToShow = [];
    for (let not of notificationList) {
      // listToShow.push({
      //   id: route.id,
      //   driver: route.driver.name,
      //   dayOfWeek: route.dayOfWeek
      // });
    }

    return listToShow;
  }

  render() {
    const { notifications } = this.props
    let animalList = notifications.map(notification => {
      return (
        <NotificationItem key={ notification.id } item={ notification } />
      );
    });

    return (
      <div>
        { animalList }
      </div>      
    );
  }
}

const mapState = (state) => ({ notifications: state.anomalies });

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(notificationsActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(NotificationList);
