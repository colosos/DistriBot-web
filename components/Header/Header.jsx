import React from 'react';
import ReactDOM from 'react-dom'
import styles from './styles.module.css';
// import Link from '../Link/Link';


//Esto va adentro
//<Navigation className={s.nav} />
//<Link className={s.brand} to="/">          	
//	<span className={s.brandTxt}>Your Company</span>
//</Link>	

export class Header extends React.Component {
  render() {
    return (    	
      <div className={styles.root}>
	      <div className={styles.container}>
	      	      	 			
 			<div className={styles.banner}>
	          <h1 className={styles.bannerTitle}>DistriBot</h1>
	          <p className={styles.bannerDesc}>Una solución integral e inteligente</p>
	        </div>
	      </div>
	    </div>
    )
  }
}

export default Header;
