//Esto es codigo copiado y aun no anda.
//La idea es que este componente le diga a que ruta moverse, etc.

import React, { Component, PropTypes } from 'react';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export default class Link extends Component {

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  handleClick = (event) => {
    let allowTransition = true;

    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      allowTransition = false;
    }

    event.preventDefault();

  };

  render() {
    const { to, children, ...props } = this.props;
    return <a href={history.createHref(to)} {...props} onClick={this.handleClick}>{children}</a>;
  }

}
