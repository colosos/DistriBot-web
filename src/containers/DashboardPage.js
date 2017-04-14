import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';

class DashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
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
