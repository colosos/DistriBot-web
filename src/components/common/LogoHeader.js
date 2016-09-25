import React, { PropTypes } from 'react';
import '../../styles/logo-header.scss';

const LogoHeader = (props) => {
  return (
    <div className="contenedor-header">
      <h2 className="title">DistriBot</h2>
      <img className="image-header" src="../../resources/blue-brain-gears.png" />
      <p className="title-header dark-grey-color">{props.title}</p>
    </div>
  );
};

const { string } = PropTypes;

LogoHeader.propTypes = {
  title: string.isRequired
};

export default LogoHeader;
