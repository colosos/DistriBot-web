import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <p>Proximamente Estadisticas</p>
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(DashboardPage);
