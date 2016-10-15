import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as saleActions from '../actions/saleActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/presales.scss';
import { priceFormatter,
         dateFormatter,
         clientFormatter,
         salesmanFormatter,
         productsLinkFormatter } from '../util/dataFormatter'
import { dateSorter } from '../util/dataSorter'
import Spinner from '../components/common/SpinnerComponent';

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

    this.state = {
      loading: true
    };

    //this.handleClick = this.handleClick.bind(this);
    this.onRowSelect = this.onRowSelect.bind(this);
  }

  // handleClick() {
  //   this.context.store.dispatch(
  //     Notifications.error(notificationOpts)
  //   );
  // }

  componentWillMount() {
    this.props.actions.loadPreSales();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sales) {
      this.setState( { loading: false } );
    }
  }

  onRowSelect(row, isSelected) {
    let orderId = row.id;
    console.log(orderId);
  }

  render() {
    const { sales } = this.props;

    //const { notifications } = this.props;

    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: this.onRowSelect
    };

    return (
      <div className="table-wrapper">
        { this.state.loading ? (<Spinner active={ this.state.loading } />) : (
        <BootstrapTable data={sales} striped={true} hover={true} search={true} pagination={true} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="client" dataSort={true} dataFormat={clientFormatter}>Cliente</TableHeaderColumn>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>ID Venta</TableHeaderColumn>
          <TableHeaderColumn dataField="creationDate" sortFunc={dateSorter} dataSort={true} dataFormat={dateFormatter}>Fecha</TableHeaderColumn>
          <TableHeaderColumn dataField="salesman" dataSort={true} dataFormat={salesmanFormatter}>Vendedor</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataSort={true} dataFormat={priceFormatter}>Monto</TableHeaderColumn>
        </BootstrapTable>
        )}
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
