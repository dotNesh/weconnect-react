import React from 'react';
import SignUpForm from '../SignUpForm';

const Hero = () => (
    <div className="hero-image">
        <div className="hero-text">
            <div className="container">
                <div className="landing-page-detail">
                    <div className="jumbotron">
                        <h1 className="display-3">WeConnect</h1>
                        <hr className="my-4" />
                        <p className="lead">"WeConnect provides a platform that brings businesses and individuals together.It gives the users the ability to write reviews about the businesses they have interacted with."</p>
                    </div>
                </div>
                <SignUpForm />
            </div>
        </div>
    </div>

);

export default Hero;
