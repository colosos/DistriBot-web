import React, { PropTypes } from 'react';
import Input from '../common/Input';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-spinkit';

const LoginForm = ({ form, error, onChange, loading, onSubmit }) => {
  const submitButton = (<input type="button" className="btn user-submit-btn" value="INGRESAR" onClick={onSubmit}/>);

  const loadingButton = (<div className="btn user-submit-btn">
                          <Spinner spinnerName="three-bounce" noFadeIn />
                         </div>);

  return (
    <Row>
      <Col lg={8} lgOffset={2} md={10} mdOffset={1} sm={10} smOffset={1} xs={12}>
        <div className="user-form">
          {error && <div className="alert alert-danger">{error}</div>}
          <Input styleClass="user-input"
                  label="Nombre de usuario"
                  type="text"
                  name="username"
                  value={form.username.value}
                  onChange={onChange}
                  error={form.username.error}/>
          <Input styleClass="user-input"
                  label="Contraseña"
                  type="password"
                  name="pass"
                  value={form.pass.value}
                  onChange={onChange}
                  error={form.pass.error}/>
          { loading ? loadingButton : submitButton}          
        </div>
      </Col>
    </Row>
  );
};

const { string, func, object, bool } = PropTypes;

LoginForm.propTypes = {
  form: object.isRequired,
  onChange: func.isRequired,
  loading: bool.isRequired,
  onSubmit: func.isRequired,
  error: string
};

export default LoginForm;