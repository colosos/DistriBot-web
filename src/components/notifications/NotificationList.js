import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationItem from './NotificationItem';
import Spinner from '../common/SpinnerComponent';
import * as notificationsActions from '../../actions/notificationsActions';
import moment from 'moment';

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
      listToShow.push({
        id: not.id + listToShow.length,
        isPositive: not.isPositive,
        diff: Math.abs(not.diff).toFixed(2),
        date: not.startDate
      });
    }

    return listToShow;
  }

  render() {
    const { notifications } = this.props
    let cleanNotifications = this.cleanNotificationsData(notifications);
    let animalList = cleanNotifications.map(notification => {
      return (
        <NotificationItem key={ notification.id } item={ notification } />
      );
    });

    return (
      <div>
        { this.state.loading ? (<Spinner active={ this.state.loading } />) : animalList }
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
