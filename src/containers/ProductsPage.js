import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/productActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/products.scss';
import { priceFormatter, dateFormatter } from '../util/dataFormatter'
import { dateSorter } from '../util/dataSorter'

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadMissingProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div className="table-wrapper">
        <h2>Lista de productos faltantes</h2>
        <BootstrapTable data={products} striped={true} hover={true} search={true} pagination={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="date" sortFunc={dateSorter} dataSort={true} dataFormat={dateFormatter}>Fecha</TableHeaderColumn>
        </BootstrapTable>
        <p>*El campo "fecha" de la tabla muestra cuando se va a entregar el producto en cuestión.</p>
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
