import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/productActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/products.scss';
import DatePicker from 'react-datepicker';
import Spinner from '../components/common/SpinnerComponent';
import moment from 'moment';
import '../styles/react-datepicker.scss';
import { quantitySorter } from '../util/dataSorter'

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      date: moment(),
      loading: true
    };
  }

  componentWillMount() {
    this.props.actions.loadMissingProducts(this.dateToRequest());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.products) {
      this.setState( { loading: false } );
    }
  }

  handleChangeDate(newDate) {
    this.setState({
      date: newDate,
      loading: true
    },
    function() {
      this.props.actions.loadMissingProducts(this.dateToRequest());
    });
  }

  dateToRequest() {
    return moment(this.state.date).format('YYYY/MM/DD');
  }

  productsToShow(productList) {
    let listToShow = [];
    for (let product of productList) {
      listToShow.push({ quantity: (product.quantity + " " + product.product.unit),
                        name: product.product.name,
                        id: product.id });
    }

    return listToShow;
  }

  render() {
    const { products } = this.props;

    return (
      <div className="table-wrapper">
        <div id="products-header">
          <h2>Productos faltantes para el { this.state.date.format("DD/MM/YYYY") }</h2>
          <p>
          Aquí se podrá consultar los productos y las respectivas cantidades que necesita comprar
          para poder cumplir con las entregas acordadas hasta la fecha seleccionada
          </p>
          <DatePicker
            className="form-control"
            selected={this.state.date}
            onChange={this.handleChangeDate.bind(this)}
            dateFormat="DD/MM/YYYY"
            />
        </div>
        {this.state.loading ? (<Spinner active={this.state.loading} />) : (
        <BootstrapTable data={this.productsToShow(products)} striped={true} hover={true} search={true} pagination={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Código</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="quantity" dataSort={true} sortFunc={quantitySorter}>Cantidad</TableHeaderColumn>
        </BootstrapTable>
        )}
      </div>
    );
  }
}

const { array, object } = PropTypes;

ProductsPage.propTypes = {
  products: array.isRequired,
  actions: object.isRequired
};

const mapState = (state) => ({ products: state.products });

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(ProductsPage);
