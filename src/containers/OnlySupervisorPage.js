import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnlySupervisorPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <p>SOLO PARA SUPERVISORES</p>
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(OnlySupervisorPage);
