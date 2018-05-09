import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/';
import AboutPage from './AboutPage';
import Navigation from './Navigation';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import CatalogPage from './CatalogPage';
import BusinessProfilePage from './BusinessProfilePage';


const App = () => (
    <div>
        <div>
            <Navigation />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exaact path="/login" component={LoginPage} />
            <Route exaact path="/register" component={RegistrationPage} />
            <Route exaact path="/catalog" component={CatalogPage} />
            <Route exaact path="/businessprofile" component={BusinessProfilePage} />
        </div>

    </div>
);

export default App;
