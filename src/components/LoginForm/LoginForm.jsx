import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';


const LoginForm = (props) => (
  <div>
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

      <p className="form-group login">Do you have an account? Sign up<Link to="/"> here.</Link></p>

    </form>
    <p className="form-group login">Forgot Password? Reset<Link to="#" data-toggle="modal" data-target=".reset"> here.</Link></p>
    <div>
      <div className="modal fade reset" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <form onSubmit={props.handleResetSubmit}>
              <div className="form-group login">
                <label>Enter username:</label>
                <input
                  type="text"
                  placeholder="username"
                  id="resetusername"
                  name="resetname"
                  value={props.state.resetname}
                  onChange={props.handleChange}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-danger">Reset</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Exit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginForm;
