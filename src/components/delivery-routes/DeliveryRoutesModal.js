import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-spinkit';
import { Col, Row } from 'react-bootstrap';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ClientItem from '../common/ClientItem';
import Select from 'react-select';
import Reorder from 'react-reorder';
import * as deliveryMen from '../../actions/deliveryMenActions';
import * as clients from '../../actions/clientsActions';
import * as routes from '../../actions/routesActions';
import * as dates from '../../constants/datesConstants';
import '../../styles/delivery-routes-modal.scss';

class DeliveryRoutesModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedDeliveryMan: 0,
      description: '',
      selectedDay: 0,
      clickedItem: '',
      clickedItem2: '',
      missingClients: [],
      sortedClients: [],
      allClients: []
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
    this.selectChanged = this.selectChanged.bind(this);
    this.selectDayChanged = this.selectDayChanged.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
    this.itemClicked2 = this.itemClicked2.bind(this);
    this.didReordered = this.didReordered.bind(this);
    this.addClient = this.addClient.bind(this);
    this.removeClient = this.removeClient.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }

  componentWillMount() {
    this.props.deliveryMenActions.loadDeliveryMen();
    this.props.clientActions.loadClients();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.clients) {
      this.setState( { missingClients: this.clientsToShow(nextProps.clients),
                       allClients: nextProps.clients } );
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let clientsId = this.getSortedClientsId();
    let deliveryManId = this.state.selectedDeliveryMan.value;

    this.props.routesActions.createRoute(deliveryManId,
                              this.state.description,
                              this.state.selectedDay.value,
                              clientsId);
    this.props.onClose();
  }

  onClose() {
    this.props.onClose();
  }

  selectChanged(value) {
    this.setState({ selectedDeliveryMan: value });
  }

  selectDayChanged(value) {
    this.setState({ selectedDay: value });
  }

  itemClicked(event, item) {    
    this.setState({ clickedItem: item === this.state.clickedItem ? undefined : item });
    
  }

  itemClicked2(event, item) {
    this.setState({ clickedItem2: item === this.state.clickedItem2 ? undefined : item });
  }

  didReordered(event, itemThatHasBeenMoved, itemsPreviousIndex, itemsNewIndex, reorderedArray) {
    this.setState({ sortedClients: reorderedArray });
  }

  changeDescription(e) {
    this.setState({ description: e.target.value });
  }

  addClient() {
    if (this.state.clickedItem) {
      let index = this.state.missingClients.indexOf(this.state.clickedItem);

      let newMissingClients = this.state.missingClients.slice();
      newMissingClients.splice(index, 1);

      let newSortedClients = this.state.sortedClients.slice();
      newSortedClients.push(this.state.clickedItem);

      this.setState({ 
        missingClients: newMissingClients,
        sortedClients: newSortedClients,
        clickedItem: undefined
      });
    }
  }

  removeClient(){
    if (this.state.clickedItem2) {
      let index = this.state.sortedClients.indexOf(this.state.clickedItem2);

      let newSortedClients = this.state.sortedClients.slice();
      newSortedClients.splice(index, 1);

      let newMissingClients = this.state.missingClients.slice();
      newMissingClients.push(this.state.clickedItem2);

      this.setState({ 
        sortedClients: newSortedClients,
        missingClients: newMissingClients,
        clickedItem2: undefined
      });
    }
  }

  deliveryMenToShow(deliveryMen) {
    var listToShow = [];
    for (let deliveryMan of deliveryMen) {
      listToShow.push({ value: deliveryMan.id,
                        label: deliveryMan.name });
    }

    return listToShow;
  }

  clientsToShow(clients) {
    var listToShow = [];
    for (let client of clients) {
      listToShow.push(client.name);
    }

    return listToShow;
  }

  getSortedClientsId() {
    let getClientId = function(clientList, clientName) {
                        let selectedClient = clientList.filter(function (cli) {
                          return cli.name === clientName;
                        })[0];

                        return selectedClient.id;
                      }

    let allClients = this.state.allClients;

    let clientsId = this.state.sortedClients.map(function (obj) {
      return getClientId(allClients, obj);
    });

    return clientsId;
  }

  render() {
    return (
      <div id="routes-modal">
        <Modal.Header>
          <Modal.Title>{ this.props.title }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col sm={6} xs={12} className="col">
              <Select
                  name="form-field-name"
                  value={ this.state.selectedDeliveryMan }
                  options={ this.deliveryMenToShow(this.props.deliveryMen) }
                  onChange={ this.selectChanged }
              />
            </Col>
            <Col sm={6} xs={12} className="col">
              <Select
                  name="form-field-name"
                  value={ this.state.selectedDay }
                  options={ dates.DAYS_OF_WEEK }
                  onChange={ this.selectDayChanged }
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup controlId="description">              
                <FormControl type="text" placeholder="Ingrese una descripción" onChange={ this.changeDescription } />
              </FormGroup>
            </Col>
          </Row>
          <div className="separator-line"></div>
          <Row id="clients-row">
            <Col sm={4} xs={12} className="col">
              <h5>Clientes NO asignados</h5>
              <Reorder  list={ this.state.missingClients }
                        lock='horizontal'
                        template={ ClientItem } 
                        itemClass='list-item' 
                        itemClicked={ this.itemClicked }                        
                        selected={ this.state.clickedItem }                      
                        disableReorder={ true }/>
            </Col>
            <Col sm={4} xs={12} className="col">
              <br/>
              <br/>
              <Button onClick={ this.addClient }>Agregar</Button>
              <br/>
              <br/>
              <Button bsStyle="danger" onClick={ this.removeClient }>Quitar</Button>
            </Col>
            <Col sm={4} xs={12} className="col">
              <h5>Clientes por orden de entrega</h5>
              <Reorder  list={ this.state.sortedClients } 
                        lock='horizontal' 
                        template={ ClientItem } 
                        itemClass='list-item'                        
                        itemClicked={ this.itemClicked2 }
                        selected={ this.state.clickedItem2 }
                        holdTime='100'
                        callback={ this.didReordered }/>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={ this.onSubmit } bsStyle="primary">Guardar</Button>
          <Button onClick={ this.onClose }>Cancelar</Button>
        </Modal.Footer>
      </div>
    );
  }
}

const { array } = PropTypes;

DeliveryRoutesModal.propTypes = {
  deliveryMen: array.isRequired
};

const mapState = (state) => ({ deliveryMen: state.deliveryMen,
                               clients: state.clients });

const mapDispatch = (dispatch) => {
  return {
    deliveryMenActions: bindActionCreators(deliveryMen, dispatch),
    clientActions: bindActionCreators(clients, dispatch),
    routesActions: bindActionCreators(routes, dispatch)
  };
};

export default connect(mapState, mapDispatch)(DeliveryRoutesModal);
