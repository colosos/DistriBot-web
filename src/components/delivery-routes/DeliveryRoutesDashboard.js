import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'react-fa'
import { Modal, Button } from 'react-bootstrap';
import DeliveryRoutesModal from './DeliveryRoutesModal'
import * as routes from '../../actions/routesActions';
import * as dates from '../../constants/datesConstants';
import '../../styles/delivery-routes.scss'

class DeliveryRoutesDashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: true,
      showModal: false,
      selectedRoute: 0
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onRowSelect = this.onRowSelect.bind(this);
    this.removeRoutes = this.removeRoutes.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routes) {
      this.setState({ loading: false });
    }
  }

  cleanRoutesData(routesList) {
    var listToShow = [];
    for (let route of routesList) {
      listToShow.push({
        id: route.id,
        driver: route.driver.name,
        dayOfWeek: route.dayOfWeek
      });
    }

    return listToShow;
  }

  onOpen() {
    this.setState({ showModal: true });
  }

  onClose() {
    this.setState({ showModal: false });
  }

  onRowSelect(row, isSelected) {
    this.setState({ selectedRoute: row.id });
  }

  removeRoutes() {
    this.props.routesActions.removeRoute(this.state.selectedRoute)
  }

  render() {
    const { routes } = this.props;

    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: this.onRowSelect,
      onSelectAll: this.onSelectAll
    };

    return (
      <div>
        <div className="separator-line"></div>
        <div className="button-routes">
          <button onClick={ this.onOpen }>
            <Icon className="add-button orange-color" name="plus-circle"/>
          </button>
        </div>
        <BootstrapTable data={ this.cleanRoutesData(routes) } striped={true} selectRow={selectRowProp}>
          <TableHeaderColumn isKey={true} dataField="id">Código</TableHeaderColumn>      
          <TableHeaderColumn dataField="driver">Repartidor</TableHeaderColumn>
          <TableHeaderColumn dataField="dayOfWeek" dataFormat={ dates.getDayOfWeekString }>Día de la semana</TableHeaderColumn>
        </BootstrapTable>
        <Button id="remove-button"
                bsStyle="danger"
                disabled={ this.state.selectedRoute <= 0 }
                onClick={ this.removeRoutes } >
                Eliminar Ruta
        </Button>
        <Modal show={ this.state.showModal } onHide={ this.onClose } bsSize="large">
          <DeliveryRoutesModal onClose={ this.onClose } title="Crear ruta" />
        </Modal>
      </div>      
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => {
  return {
    routesActions: bindActionCreators(routes, dispatch)
  };
};

export default connect(mapState, mapDispatch)(DeliveryRoutesDashboard);
