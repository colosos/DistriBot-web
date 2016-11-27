import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss'

class PredictionsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <iframe 
          id="main-frame"
          src="https://app.powerbi.com/view?r=eyJrIjoiOTU2NTMxZTctOTRiYy00YzVhLWE3MWMtNzg2YjYyYjI3NjY3IiwidCI6ImIxNDcxYmQyLTMxOTEtNDRjYS05NjI5LTk0OWMyOWQ4Zjg4YyIsImMiOjR9"
          frameBorder="0"
          allowFullScreen="true">
        </iframe>
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(PredictionsPage);
