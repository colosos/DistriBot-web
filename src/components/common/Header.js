import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Image } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as logoutActions from '../../actions/logoutActions';
import * as userActions from '../../actions/userActions';
import '../../styles/header.scss';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      toggleMenu: false
    };

    this.onClickLogout = this.onClickLogout.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.first_name) {
      this.props.userActions.showLoginUser();
    }
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
    return (
      <Navbar className="bg-orange-color" expanded={this.state.toggleMenu} onToggle={this.onToggle}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="imageheader">
               <Image src="../../resources/white-brain-gears.png"/>
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
                  to="/predicciones"
                  onClick={this.onClickLink}>
              PREDICCIONES
            </Link>
          </ul>
          <ul className="nav navbar-nav item">
            <Link activeClassName="active-link"
                  className="header-link"
                  to="/estadisticas"
                  onClick={this.onClickLink}>
              ESTADISTICAS
            </Link>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <Link to="/perfil" onClick={this.onClickLink}>
              <i className="material-icons">account_circle</i>
              <span className="header-span"> Hola {this.props.user.first_name}</span>
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
  user: object.isRequired
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