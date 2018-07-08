import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/';
import AboutPage from './AboutPage';
import Navigation from './Navigation';
import LoginPage from './LoginPage';
import RegistrationForm from './RegistrationForm';
import CatalogList from './CatalogList';
import BusinessProfile from './BusinessProfile';


const App = () => (
  <div>

    <Navigation />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegistrationForm} />
    <Route exact path="/catalog" component={CatalogList} />
    <Route path="/businessprofile/:business_id" component={BusinessProfile} />

  </div>
);

export default App;
