import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../styles/notifications.scss'

class NotificationItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { item } = this.props;

    var anomalyTipe = 'negative'
    var title = 'Ventas INFERIORES a lo esperado en $' + item.diff
    var description = 'Se detectó un resultado inesperado, es necesario detectar la causa para tomar medidas correctivas'

    if (item.isPositive) {
      anomalyTipe = 'positive'
      title = 'Ventas SUPERIORES a lo esperado en $' + item.diff
      description = 'Si bien son buenas noticias se recomienda buscar la causa del incremento en las ventas inesperado'
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
          <i className='timestamp'>{ item.start_date + ' - ' + item.end_date }</i>
        </Col>
      </Row>
    );
  }
}

export default NotificationItem;
