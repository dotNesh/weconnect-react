import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const SignUpForm = (props) => (
  <aside id="demo">
    <form method="post" onSubmit={props.handleSubmit} className="signin-form">
      <ToastContainer
        autoClose={10000}
        closeOnClick
        pauseOnHover
        position="top-right"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <h3 className="form-group">Create an account</h3>
      <div className="form-group">
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

      <div className="form-group">
        <label htmlFor="useremail">Email Address:</label>
        <input
          type="email"
          id="useremail"
          className="form-control"
          placeholder="someone@examle.com"
          name="email"
          value={props.state.email}
          onChange={props.handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="userpasswrd">Password:</label>
        <input
          type="password"
          id="userpasswrd"
          className="form-control"
          placeholder="Set a password"
          name="password"
          value={props.state.password}
          onChange={props.handleChange}
          required/>
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary get-started"
          id="login-btn">Get Started</button>
      </div>

      <div className="form-group">
        <p className="form-txt">Already have an account? Login <Link to="/login">here.</Link></p>
      </div>

    </form>
  </aside>
);

export default SignUpForm;
