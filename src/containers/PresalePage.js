import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as saleActions from '../actions/saleActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/presales.scss';
import { priceFormatter, dateFormatter } from '../util/dataFormatter'
import { dateSorter } from '../util/dataSorter'
import Spinner from '../components/common/SpinnerComponent';
import SaleDetails from '../components/sale/SaleDetails';

class PresalePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: true,
      showingDetails: false,
      orderId: 0
    };

    this.onRowSelect = this.onRowSelect.bind(this);
  }

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
    this.setState({ showingDetails: true, orderId: orderId });
  }

  onCloseModal() {
    this.setState({ showingDetails: false });
  }

  salesToShow(salesList) {
    let listToShow = [];
    for (let sale of salesList) {
      listToShow.push({ client: sale.client != null ? sale.client.name : '',
                        id: sale.id,
                        creationDate: sale.creationDate,
                        salesman: sale.salesman != null ? sale.salesman.userName : '',
                        price: sale.price
                         });
    }

    return listToShow;
  }

  render() {
    const { sales } = this.props;

    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: this.onRowSelect
    };

    return (
      <div>
        <div className="table-wrapper">
          { this.state.loading ? (<Spinner active={ this.state.loading } />) : (
          <BootstrapTable data={ this.salesToShow(sales) } striped={true} hover={true} search={true} pagination={true} selectRow={selectRowProp}>
            <TableHeaderColumn dataField="client" dataSort={true}>Cliente</TableHeaderColumn>
            <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Código factura</TableHeaderColumn>
            <TableHeaderColumn dataField="creationDate" sortFunc={dateSorter} dataSort={true} dataFormat={dateFormatter}>Fecha</TableHeaderColumn>
            <TableHeaderColumn dataField="salesman" dataSort={true}>Vendedor</TableHeaderColumn>
            <TableHeaderColumn dataField="price" dataSort={true} dataFormat={priceFormatter}>Monto</TableHeaderColumn>
          </BootstrapTable>
          )}
        </div>
        { this.state.showingDetails ? (<SaleDetails orderId={ this.state.orderId } onClose={ this.onCloseModal.bind(this) } />) : "" }
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
