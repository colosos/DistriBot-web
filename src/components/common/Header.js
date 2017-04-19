import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Image } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as logoutActions from '../../actions/logoutActions';
import * as userActions from '../../actions/userActions';
import * as session from '../../actions/sessionActions';
import * as consts from '../../constants/apiConstants.js';
import '../../styles/header.scss';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      toggleMenu: false,
    };

    this.onClickLogout = this.onClickLogout.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
  }

  onClickLogout() {
    this.props.logoutActions.logoutDispatch(this.context.router);
  }

  onToggle() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  onClickLink() {
    if (this.state.toggleMenu) {
      this.setState({ toggleMenu: false });
    }
  }

  render() {
    const username = session.loadCurrentUser();
    return (
      <Navbar className="bg-orange-color" expanded={this.state.toggleMenu} onToggle={this.onToggle}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="imageheader">
               <Image src={ consts.WHITE_BRAIN_URL }/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse className="nav-Options">
          <ul className="nav navbar-nav item">
            <Link activeClassName="active-link"
                  className="header-link"
                  to="/preventa"
                  onClick={this.onClickLink}>
              PREVENTA
            </Link>
          </ul>
          <ul className="nav navbar-nav item">
            <Link activeClassName="active-link"
                  className="header-link"
                  to="/faltantes"
                  onClick={this.onClickLink}>
              FALTANTES
            </Link>
          </ul>
          <ul className="nav navbar-nav item">
            <Link activeClassName="active-link"
                  className="header-link"
                  to="/reportes"
                  onClick={this.onClickLink}>
              REPORTES
            </Link>
          </ul>
          <ul className="nav navbar-nav item">
            <Link activeClassName="active-link"
                  className="header-link"
                  to="/rutas"
                  onClick={this.onClickLink}>
              RUTAS DE REPARTO
            </Link>
          </ul>
          <ul className="nav navbar-nav item">
            <Link activeClassName="active-link"
                  className="header-link"
                  to="/notificaciones"
                  onClick={this.onClickLink}>
              ANOMALÍAS
            </Link>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <Link to="/perfil" onClick={this.onClickLink}>
              <i className="material-icons">account_circle</i>
              <span className="header-span"> Hola {username}</span>
            </Link>
            <span className="header-span">&nbsp;|&nbsp;</span>
            <button className="logout-button" onClick={this.onClickLogout}>SALIR</button>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const { object } = PropTypes;

Header.propTypes = {
  logoutActions: object.isRequired,
  userActions: object.isRequired,
};

Header.contextTypes = {
  router: object
};

const mapState = () => ({});

const mapDispatch = (dispatch) => {
  return {
    logoutActions: bindActionCreators(logoutActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Header);
