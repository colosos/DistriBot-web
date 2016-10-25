import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnlyManagerPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <p>SOLO PARA GERENTES</p>
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(OnlyManagerPage);
