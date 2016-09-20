import React from 'react';
import ReactDOM from 'react-dom'
import styles from './styles.module.css';
// import Link from '../Link';
// import Navigation from '../Navigation';

//Esto va adentro
//<Navigation className={s.nav} />
//<Link className={s.brand} to="/">
//  <span className={s.brandTxt}>Your Company</span>
//</Link>

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.container}>HEADER!!</div>
    )
  }
}

export default Header;
