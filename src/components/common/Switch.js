import React, { Component, PropTypes } from 'react';
import '../../styles/switch.scss';
import Switch from 'rc-switch';

class DBSwitch extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      textValue: 'AUTOMÁTICO'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      textValue: nextProps.checked ? 'MANUAL' : 'AUTOMÁTICO'
    });
  }


  onSwitchChange() {
    this.props.onChange(this.state.textValue == 'AUTOMÁTICO');
    if (this.state.textValue == 'AUTOMÁTICO') {
      this.setState({ textValue: 'MANUAL' });
    } else {
      this.setState({ textValue: 'AUTOMÁTICO' });
    } 
  }

  render() {
    return (
      <div>
        <Switch checked={ this.props.checked } onChange={ this.onSwitchChange.bind(this) }/>
        <br/>
        <div className="switch-label">
          <b>Modo { this.state.textValue }</b>
        </div>  
      </div>
    );
  }
}

export default DBSwitch;
