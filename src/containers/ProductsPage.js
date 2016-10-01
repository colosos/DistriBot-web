import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/productActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/products.scss';

class ProductsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadMissingProducts();
  }

  priceFormatter(cell){
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }

  dateFormatter(cell){
    /*Esto parece que esta convirtiendo teniendo en cuenta
    el timezone. Luego que se obtenga la fecha del backend
    se va a testear este metodo para ver si funciona bien.*/
    const date = new Date(cell);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return day + '/' + month + '/' + year;
  }

  render() {
    //const { products } = this.props;
    const products = [{
      id: 1,
      date: '2016-07-01',
      name: "Azucar",
      price: 100
    },{
      id: 2,
      date: '2016-07-03',
      name: "Naranja",
      price: 120
    },{
      id: 3,
      date: '2016-09-15',
      name: "Limon",
      price: 100
    },{
      id: 4,
      date: '2016-06-30',
      name: "Banana",
      price: 86
    },{
      id: 5,
      date: '2017-04-02',
      name: "Yerba",
      price: 100
    }];

    function dateSorter(a, b, order) {
      if (order === 'asc') {
        return new Date(a.date) - new Date(b.date);
      }
      return new Date(b.date) - new Date(a.date);      
    }

    return (
      <div className="table-wrapper">
        <h2>Lista de productos faltantes</h2>
        <BootstrapTable data={products} striped={true} hover={true} search={true} pagination={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="date" sortFunc={dateSorter} dataSort={true} dataFormat={this.dateFormatter}>Fecha</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataSort={true} dataFormat={this.priceFormatter}>Monto</TableHeaderColumn>
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
