import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DBSwitch from '../components/common/Switch';
import { Col, Row } from 'react-bootstrap';
import '../styles/delivery-routes.scss'
import DeliveryRoutesDashboard from '../components/delivery-routes/DeliveryRoutesDashboard';
import * as routesActions from '../actions/routesActions';
import Spinner from '../components/common/SpinnerComponent';

class DeliveryRoutesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      manualMode: false,
      loadingRoutes: true
    }
  }

  componentWillMount() {
    this.props.actions.getRouteMode();
    this.props.actions.loadDeliveryRoutes();
  }

  switchDidChanged(value) {
    this.setState({ manualMode: value });
    let numberValue = value ? 0 : 1;
    this.props.actions.updateRouteMode(numberValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routes) {
      this.setState({ loadingRoutes: false });
    }
    if (nextProps.manualMode) {
      this.setState({ manualMode: nextProps.manualMode });
    }
  }

  render() {
    const { routes } = this.props;

    return (
      <div className="container">
        <Row>
          <Col sm={9} xs={12} className="explanation-wrapper">
            <p>
              <b>DistriBot optimiza las rutas de reparto minimizando la 
                <i> distancia total</i> del recorrido automáticamente.
              </b>
            </p>
            <p>
              Si por alguna razón desea que el armado deje de hacerse de manera automáticamente puede activar
              el modo manual.
            </p>
          </Col>
          <Col sm={3} xs={12} className="switch-wrapper">
            <DBSwitch checked={ this.state.manualMode } onChange={ this.switchDidChanged.bind(this) }/>
          </Col> 
        </Row>
        { this.state.manualMode ? (
          <Row>
            { this.state.loadingRoutes ? (<Spinner active={ this.state.loadingRoutes } />) : (
              <DeliveryRoutesDashboard routes={ routes } />
            )}
          </Row>
        ) : '' }
      </div>
    );
  }
}

const { array } = PropTypes;

DeliveryRoutesPage.propTypes = {
  routes: array.isRequired
};

const mapState = (state) => {
  return {
    routes: state.routesPage.routes,
    manualMode: state.routesPage.manualMode
  };
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(routesActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(DeliveryRoutesPage);
