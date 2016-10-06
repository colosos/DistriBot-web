import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as saleActions from '../actions/saleActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/presales.scss';
import { priceFormatter, dateFormatter } from '../util/dataFormatter'
import { dateSorter } from '../util/dataSorter'

//import Notifications from 'react-notification-system-redux';

// const notificationOpts = {
//   // uid: 'once-please', // you can specify your own uid if required
//   title: 'Hey, it\'s good to see you!',
//   message: 'Now you can see how easy it is to use notifications in React!',
//   position: 'tr',
//   autoDismiss: 0,
//   action: {
//     label: 'Click me!!',
//     callback: () => alert('clicked!')
//   }
// };

class PresalePage extends Component {
  constructor(props, context) {
    super(props, context);

    //this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.context.store.dispatch(
  //     Notifications.error(notificationOpts)
  //   );
  // }

  componentWillMount() {
    this.props.actions.loadSales();
  }

  render() {
    const { sales } = this.props;

    //const { notifications } = this.props;

    // const sales = [{
    //   id: 1,
    //   date: '2016-07-01',
    //   seller: "Vendedor 1",
    //   productId: "123",
    //   product: "Azucar",
    //   price: 100
    // },{
    //   id: 2,
    //   date: '2016-07-03',
    //   seller: "Vendedor 2",
    //   productId: "456",
    //   product: "Naranja",
    //   price: 120
    // },{
    //   id: 3,
    //   date: '2016-09-15',
    //   seller: "Vendedor 1",
    //   productId: "2345",
    //   product: "Limon",
    //   price: 100
    // },{
    //   id: 4,
    //   date: '2016-06-30',
    //   seller: "Vendedor 1",
    //   productId: "767",
    //   product: "Banana",
    //   price: 86
    // },{
    //   id: 5,
    //   date: '2017-04-02',
    //   seller: "Vendedor 2",
    //   productId: "123",
    //   product: "Azucar",
    //   price: 100
    // }];

    return (
      <div className="table-wrapper">
        <BootstrapTable data={sales} striped={true} hover={true} search={true} pagination={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>ID Venta</TableHeaderColumn>
          <TableHeaderColumn dataField="date" sortFunc={dateSorter} dataSort={true} dataFormat={dateFormatter}>Fecha</TableHeaderColumn>
          <TableHeaderColumn dataField="seller" dataSort={true}>Vendedor</TableHeaderColumn>
          <TableHeaderColumn dataField="productId" dataSort={true}>ID Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="product" dataSort={true}>Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataSort={true} dataFormat={priceFormatter}>Monto</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const { array, object } = PropTypes;

PresalePage.propTypes = {
  sales: array.isRequired,
  actions: object.isRequired
};

PresalePage.contextTypes = {
  store: PropTypes.object
};

const mapState = (state) => ({ sales: state.sales });

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(saleActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(PresalePage);
