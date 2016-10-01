import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../styles/presales.scss';

class PresalePage extends Component {
  constructor(props, context) {
    super(props, context);
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
    const sales = [{
      id: 1,
      date: '2016-07-01',
      seller: "Vendedor 1",
      productId: "123",
      product: "Azucar",
      price: 100
    },{
      id: 2,
      date: '2016-07-03',
      seller: "Vendedor 2",
      productId: "456",
      product: "Naranja",
      price: 120
    },{
      id: 3,
      date: '2016-09-15',
      seller: "Vendedor 1",
      productId: "2345",
      product: "Limon",
      price: 100
    },{
      id: 4,
      date: '2016-06-30',
      seller: "Vendedor 1",
      productId: "767",
      product: "Banana",
      price: 86
    },{
      id: 5,
      date: '2017-04-02',
      seller: "Vendedor 2",
      productId: "123",
      product: "Azucar",
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
        <BootstrapTable data={sales} striped={true} hover={true} search={true} pagination={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>ID Venta</TableHeaderColumn>
          <TableHeaderColumn dataField="date" sortFunc={dateSorter} dataSort={true} dataFormat={this.dateFormatter}>Fecha</TableHeaderColumn>
          <TableHeaderColumn dataField="seller" dataSort={true}>Vendedor</TableHeaderColumn>
          <TableHeaderColumn dataField="productId" dataSort={true}>ID Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="product" dataSort={true}>Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataSort={true} dataFormat={this.priceFormatter}>Monto</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const mapState = () => ({});

export default connect(mapState)(PresalePage);
