import React, { PropTypes } from 'react';
import * as consts from '../../constants/apiConstants.js';
import '../../styles/logo-header.scss';

const LogoHeader = (props) => {
  return (
    <div className="contenedor-header">
      <h2 className="title">DistriBot</h2>
      <img className="image-header" src={ consts.BLUE_BRAIN_URL } />
      <p className="title-header dark-grey-color">{props.title}</p>
    </div>
  );
};

const { string } = PropTypes;

LogoHeader.propTypes = {
  title: string.isRequired
};

export default LogoHeader;
