import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import '../styles/dashboard.scss';

const badAnomaly = {
  title: 'Advertencia',
  message: 'La semana pasada las ventas fueron menos de la mitad lo esperado.',
  position: 'tr',
  autoDismiss: 0
};

const goodAnomaly = {
  title: 'Buenas noticias',
  message: 'Esta semana estas vendiendo más de lo esperado. Continúa con el esfuerzo!',
  position: 'tr',
  autoDismiss: 0
};

class DashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.context.store.dispatch(
      Notifications.success(goodAnomaly)
    );
    this.context.store.dispatch(
      Notifications.error(badAnomaly)
    );    
  }

  render() {
    return (
      <div className="container">
        <h3>Reporte diario</h3>
        <iframe
          className="report"
          src="https://app.powerbi.com/view?r=eyJrIjoiMDdkMWRiMDUtOWRhMi00MGQ1LTg3MjctZDI0MWE4MTQyNGFmIiwidCI6ImIxNDcxYmQyLTMxOTEtNDRjYS05NjI5LTk0OWMyOWQ4Zjg4YyIsImMiOjR9"
          frameBorder="0"
          allowFullScreen="true" />
        <br/>
        <h3>Reporte semanal</h3>
        <iframe
          className="report"
          src="https://app.powerbi.com/view?r=eyJrIjoiOTU2NTMxZTctOTRiYy00YzVhLWE3MWMtNzg2YjYyYjI3NjY3IiwidCI6ImIxNDcxYmQyLTMxOTEtNDRjYS05NjI5LTk0OWMyOWQ4Zjg4YyIsImMiOjR9"
          frameBorder="0"
          allowFullScreen="true" />
      </div>
    );
  }
}

const { object } = PropTypes;

DashboardPage.contextTypes = {
  store: object
};

const mapState = () => ({});

export default connect(mapState)(DashboardPage);
