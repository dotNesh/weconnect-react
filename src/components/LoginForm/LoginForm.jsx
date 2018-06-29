import React from 'react';
import { ToastContainer } from 'react-toastify';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit} className="login-form">
    <ToastContainer
      autoClose={10000}
      closeOnClick
      pauseOnHover
      position="top-right"
      className="toast-container"
      toastClassName="dark-toast"
    />
    <div className="form-group login">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        className="form-control"
        placeholder="username"
        value={props.state.username}
        onChange={props.handleChange}
        required
      />
    </div>

    <div className="form-group login">
      <label htmlFor="userpasswrd">Password:</label>
      <input
        type="password"
        id="password"
        className="form-control"
        placeholder="password"
        name="password"
        value={props.state.password}
        onChange={props.handleChange}
        required
      />
    </div>

    <div className="form-group login">
      <button id="loginbtn" type="submit" className="btn btn-primary">Log in</button>
    </div>

    <p className="form-group login">Do you have an account? Sign up<a href="/"> here.</a></p>
  </form>
);

export default LoginForm;
