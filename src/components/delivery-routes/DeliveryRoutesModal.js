import React, { Component, PropTypes } from 'react';
import Spinner from 'react-spinkit';
import { Col, Row } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import ClientItem from '../common/ClientItem';
import Select from 'react-select';
import moment from 'moment';
import Reorder from 'react-reorder';
import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-select/dist/react-select.css';
import '../../styles/delivery-routes-modal.scss';

class DeliveryRoutesModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      date: moment(),
      selectedDeliveryMan: "",
      clickedItem: '',
      clickedItem2: '',
      missingClients: [],
      sortedClients: []
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
    this.selectChanged = this.selectChanged.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
    this.itemClicked2 = this.itemClicked2.bind(this);
    this.didReordered = this.didReordered.bind(this);
    this.addClient = this.addClient.bind(this);
    this.removeClient = this.removeClient.bind(this);
  }

  componentWillMount() {
    //this.props.actions.loadSpecies();
    let clientList = [
      'sad', 'qwe', 'sdf'
    ];

    let clientList2 = [
      'tero', 'pepo', 'kaka'
    ];

    this.setState({ sortedClients: clientList, missingClients: clientList2 });
  }

  onSubmit(e) {
    e.preventDefault();
    // this.validateForm(this.state.animal);
    // if (valid.notErrors(this.state.errors)) {
    //   this.setState({ loading: true });
    //   this.props.actions.sendAnimalForm(this.state.animal);
    // }
  }

  onClose() {
    //this.props.actions.cancelAnimalForm();
    this.props.onClose();
  }

  selectChanged(value) {
    this.setState({ selectedDeliveryMan: value });
  }

  handleChangeDate(newDate) {
    this.setState({
      date: newDate
    })
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

  render() {
    var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

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
                  options={ options }
                  onChange={ this.selectChanged }
              />
            </Col>
            <Col sm={6} xs={12} className="col">
              <DatePicker
                className="form-control date-picker"
                selected={ this.state.date }
                onChange={ this.handleChangeDate }
                dateFormat="DD/MM/YYYY"
              />
            </Col>
          </Row>
          <div className="separator-line"></div>
          <Row id="clients-row">
            <Col sm={4} xs={12} className="col">
              <Reorder  list={ this.state.missingClients }
                        lock='horizontal'
                        template={ ClientItem } 
                        itemClass='list-item' 
                        itemClicked={ this.itemClicked }
                        selected={ this.state.clickedItem }
                        disableReorder={ true }/>
            </Col>
            <Col sm={4} xs={12} className="col">
              <Button onClick={ this.addClient }>Agregar</Button>
              <br/>
              <br/>
              <Button bsStyle="danger" onClick={ this.removeClient }>Quitar</Button>
            </Col>
            <Col sm={4} xs={12} className="col">
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
          <Button onClick={ this.onClose } bsStyle="primary">Guardar</Button>
          <Button onClick={ this.onClose }>Cancelar</Button>
        </Modal.Footer>
      </div>
    );
  }
}

export default DeliveryRoutesModal;
