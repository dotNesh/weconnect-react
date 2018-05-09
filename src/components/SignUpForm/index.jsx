import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => (
    <aside id="demo">
        <form action="#" className="signin-form">
            <h3 className="form-group">Create an account</h3>
            <div className="form-group">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" className="form-control" placeholder="Full name" />
            </div>

            <div className="form-group">
                <label htmlFor="useremail">Email Address:</label>
                <input type="email" id="useremail" className="form-control" placeholder="someone@examle.com" />
            </div>

            <div className="form-group">
                <label htmlFor="userpasswrd">Password:</label>
                <input type="password" id="userpasswrd" className="form-control" placeholder="Set a password" />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary get-started" id="login-btn">Get Started</button>
            </div>

            <div className="form-group">
                <p className="form-txt">Already have an account? Login <Link to="/login">here.</Link></p>
            </div>

        </form>
    </aside>
);

export default SignUpForm;
