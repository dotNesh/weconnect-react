import React from 'react';
import ReviewForm from '../ReviewForm';
import BusinessProfile from '../BusinessProfile';
import Reviews from '../Reviews';

const BusinessProfilePage = () => (
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <BusinessProfile />
            </div>
            <div className="col-sm-6">
                <ReviewForm />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <h3>Reviews</h3>
                <Reviews />
            </div>
        </div>
    </div>


);

export default BusinessProfilePage;
