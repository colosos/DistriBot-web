import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        HomePage
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(HomePage);
