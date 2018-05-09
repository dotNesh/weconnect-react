import React from 'react';

const LoginForm = () => (
    <form action="#" className="login-form">
        <div className="form-group login">
            <label htmlFor="useremail">Email Address:</label>
            <input type="email" id="useremail" className="form-control " placeholder="someone@examle.com" />
        </div>

        <div className="form-group login">
            <label htmlFor="userpasswrd">Password:</label>
            <input type="password" id="userpasswrd" className="form-control" placeholder="password" />
        </div>

        <div className="form-group login">
            <button id="loginbtn" type="submit" className="btn btn-primary">Log in</button>
        </div>

        <p className="form-group login">Do you have an account? Sign up<a href="/"> here.</a></p>
    </form>
);

export default LoginForm;
