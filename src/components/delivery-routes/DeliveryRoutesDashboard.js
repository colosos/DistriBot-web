import React, { Component } from 'react';
import { Icon } from 'react-fa'
import { Col, Row } from 'react-bootstrap';
import '../../styles/delivery-routes.scss'

class DeliveryRoutesDashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: true,
      showModal: false
    };

    this.onOpen = this.onOpen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.routes) {
      this.setState({ loading: false });
    }
  }

  cleanRoutesData(routesList) {
    var listToShow = [];
    for (let route of routesList) {
      // listToShow.push({ quantity: (sale.quantity + " " + sale.product.unit),
      //                   price: (sale.product.price * sale.quantity),
      //                   name: sale.product.name,
      //                   id: sale.id });
    }

    return listToShow;
  }

  onOpen() {
    this.setState({ showModal: true });
  }

  render() {
    const { routes } = this.props;

    return (
      <div>
        <div className="separator-line"></div>
        <div className="button-routes">
          <button onClick={ this.onOpen }>
            <Icon className="add-button orange-color" name="plus-circle"/>
          </button>
        </div>
        <BootstrapTable data={ routes } striped={true}>
          <TableHeaderColumn isKey={true} dataField="id">Código</TableHeaderColumn>      
          <TableHeaderColumn dataField="deliveryman">Repartidor</TableHeaderColumn>
        </BootstrapTable>
      </div>      
    );
  }
}

export default DeliveryRoutesDashboard;
