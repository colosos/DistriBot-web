import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as saleActions from '../../actions/saleActions';
import Spinner from '../common/SpinnerComponent';
import { priceFormatter } from '../../util/dataFormatter'

class SaleDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: true,
      orderId: props.orderId,
      onClose: props.onClose
    };
  }

  componentWillMount() {
    this.props.actions.loadSale(this.state.orderId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sale) {
      this.setState( { loading: false } );
    }
  }

  cleanSaleData(productList) {
    var listToShow = [];
    for (let sale of productList) {
      listToShow.push({ quantity: (sale.quantity + " " + sale.product.unit),
                        price: (sale.product.price * sale.quantity),
                        name: sale.product.name,
                        id: sale.id });
    }

    return listToShow;
  }

  render() {
    const { sale } = this.props;

    return (
      <Modal.Dialog>
        { this.state.loading ? (<Spinner active={ this.state.loading } />) : (
          <div>
            <Modal show={ true }>
              <Modal.Header>
                <Modal.Title>{ sale.client.name }</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <h3>Productos:</h3>
                <BootstrapTable data={ this.cleanSaleData(sale.productsList) } striped={true}>
                  <TableHeaderColumn isKey={true} dataField="id">Id</TableHeaderColumn>      
                  <TableHeaderColumn dataField="name">Producto</TableHeaderColumn>
                  <TableHeaderColumn dataField="quantity">Cantidad</TableHeaderColumn>
                  <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Precio</TableHeaderColumn>
                </BootstrapTable>
                <br/>
                <h4>Precio total: ${ sale.price }</h4>
                <br/>
                <h5>Vendedor: { sale.salesman.name } ({ sale.salesman.userName })</h5>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={ this.state.onClose }>Cerrar</Button>
              </Modal.Footer>
            </Modal>  
          </div> 
        )}        
      </Modal.Dialog>
    );
  }
}

const { object } = PropTypes;

SaleDetails.propTypes = {
  actions: object.isRequired,
  sale: object.isRequired
};

SaleDetails.contextTypes = {
  store: object
};

const mapState = (state) => ({ sale: state.sale });

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(saleActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(SaleDetails);