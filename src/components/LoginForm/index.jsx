import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

import { loginUser } from '../../actions/user';

class LoginComponent extends Component {
    static propTypes = {
      username: PropTypes.string,
      password: PropTypes.string,
      actions: PropTypes.object
    }

    state = {
      username: this.props.username || '',
      password: this.props.password || '',
    }

    handleSubmit = e => {
      e.preventDefault();

      const { username, password } = this.state;
      this.handleSave(username, password);
    }

    handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleSave = (username, password) => {
      this.props.loginUser(username, password);
    }

    render() {
      return (
        <div>
          <LoginForm
            state={this.state}
            handleSubmit={this.handleSubmit}
            onSave={this.handleSave}
            handleChange={this.handleChange}
          />
        </div>
      );
    }
}
const mapStateToProps = state => ({
  auth: state.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(loginUser, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

