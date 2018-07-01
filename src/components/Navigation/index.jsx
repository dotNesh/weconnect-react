import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer } from 'react-toastify';

import { logoutUser } from '../../actions/user';

class Navigation extends Component {
    handleLogout = () => {
      this.props.logoutUser();
    }

    render() {
      console.log(this.props.user.isAuthenticated);
      return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ToastContainer
            autoClose={10000}
            closeOnClick
            pauseOnHover
            position="top-right"
            className="toast-container"
            toastClassName="dark-toast"
          />
          <a className="navbar-brand" href="/">WeConnect</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">Why WeConnect?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            { this.props.user.isAuthenticated ?
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register a Business</Link>
              </li> : null }

            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>

            { this.props.user.isAuthenticated ?
              <li className="nav-item">
                <button onClick={this.handleLogout} className="nav-link btn btn-success" to="/">Logout</button>
              </li> : <Link className="nav-link btn btn-success" to="/login">Log in</Link> }

          </ul>
        </nav>


      );
    }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: bindActionCreators(logoutUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

