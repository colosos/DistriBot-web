import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import Header from '../Header/Header'

class App extends React.Component {
  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render () {
     return (
      <div style={{ height: '100%' }}>
        <Header />
        {this.content}
      </div>
     )
   }
}

export default App;
