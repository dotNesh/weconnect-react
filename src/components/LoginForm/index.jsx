import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

import { loginUser, resetPassword } from '../../actions/user';

class LoginComponent extends Component {
    static propTypes = {
      username: PropTypes.string,
      password: PropTypes.string,
      resetname: PropTypes.string,
      actions: PropTypes.object
    }

    state = {
      username: this.props.username || '',
      password: this.props.password || '',
      resetname: this.props.resetname || '',
    }

    handleSubmit = e => {
      e.preventDefault();

      const { username, password } = this.state;
      this.handleSave(username, password);
    }

    handleResetSubmit = e => {
      e.preventDefault();

      const { resetname } = this.state;
      this.handleReset(resetname);
    }

    handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleSave = (username, password) => {
      this.props.loginUser(username, password);
    }

    handleReset = (resetname) => {
      this.props.resetPassword(resetname);
    }

    render() {
      return (
        <div>
          <LoginForm
            state={this.state}
            handleSubmit={this.handleSubmit}
            onSave={this.handleSave}
            handleChange={this.handleChange}
            handleResetSubmit={this.handleResetSubmit}
          />
        </div>
      );
    }
}
const mapStateToProps = state => ({
  auth: state.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(loginUser, dispatch),
  resetPassword: bindActionCreators(resetPassword, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

