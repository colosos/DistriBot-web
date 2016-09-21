import React, { PropTypes } from 'react';

import styles from './Login.css';


export class LoginForm extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h1>Formulario de ingreso</h1>
          <p className={styles.lead}>Ingresa con tu nombre de usuario.</p>
          <form>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="usernameOrEmail">
                Nombre de usuario:
              </label>
              <input
                className={styles.input}
                id="usernameOrEmail"
                type="text"
                name="usernameOrEmail"
                autoFocus
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">
                Contraseña:
              </label>
              <input
                className={styles.input}
                id="password"
                type="password"
                name="password"
              />
            </div>
            <div className={styles.formGroup}>
              <button className={styles.button} type="submit">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
