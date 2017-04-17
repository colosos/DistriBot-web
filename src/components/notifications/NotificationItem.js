import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { previousMonday, getDateString } from '../../util/dataFormatter';
import '../../styles/notifications.scss';


class NotificationItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { item } = this.props;

    var anomalyTipe = 'negative'
    var title = 'BAJAS VENTAS'
    var description = 'Las ventas fueron INFERIORES a lo esperado con una diferencia de $' + item.diff
    let lastSunday = item.date.substring(0, 10)
    let datesRange = previousMonday(lastSunday) + ' -- ' + getDateString(lastSunday)

    if (item.isPositive) {
      anomalyTipe = 'positive'
      title = 'BUENAS VENTAS'
      description = 'Las ventas fueron SUPERIORES a lo esperado con una diferencia de $' + item.diff
    }

    return (
      <Row className={ anomalyTipe }>
        <Col sm={3} xs={12}>
          <strong>{ title }</strong>
        </Col>
        <Col sm={7} xs={12}>
          <span>{ description }</span>
        </Col>
        <Col sm={2} xs={12}>
          <i className='timestamp'>{ datesRange }</i>
        </Col>
      </Row>
    );
  }
}

export default NotificationItem;
