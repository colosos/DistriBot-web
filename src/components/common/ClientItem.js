import React, { Component, PropTypes } from 'react';

class ClientItem extends Component {
  
  render() {
    return (
      <b>
        { this.props.item }
      </b>
    );
  }
}

export default ClientItem;
