import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';

import { registerUser } from '../../actions/user';

class RegisterComponent extends Component {
  static propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    actions: PropTypes.object
  }

state = {
  username: this.props.username || '',
  email: this.props.email || '',
  password: this.props.password || ''
}

handleSubmit = e => {
  e.preventDefault();

  const {
    username, email, password
  } = this.state;
  this.handleSave(username, email, password);
}

handleChange = e => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}

  handleSave = (username, email, password) => {
    if (email.length !== 0) {
      this.props.registerUser(username, email, password);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <SignUpForm
          onSave={this.handleSave}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          state={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  registerUser: bindActionCreators(registerUser, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);

