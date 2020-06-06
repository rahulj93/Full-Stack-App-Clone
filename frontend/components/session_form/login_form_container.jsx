import { connect } from 'react-redux'; 
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { login } from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mapStateToProps = ({ errors }) => ({
  // errors: errors.session, 
  formType: 'login', 
  navLink: <Link to="/register">sign up instead</Link>,  
  redirectMessage: 'Don\'t have an account? '
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 