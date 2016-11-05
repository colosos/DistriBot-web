import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <iframe width="680"
                height="510" 
                src="https://app.powerbi.com/view?r=eyJrIjoiMTcxYTc0NzQtYTA5MS00N2FjLTllNDItMTlkZDJiOWY3ODVmIiwidCI6ImIxNDcxYmQyLTMxOTEtNDRjYS05NjI5LTk0OWMyOWQ4Zjg4YyIsImMiOjR9"
                frameborder="0"
                allowFullScreen="true">
        </iframe>
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(DashboardPage);
