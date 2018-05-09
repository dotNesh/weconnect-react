import React from 'react';

const RegistrationForm = () => (
    <form action="#" className="register-form">
        <div className="form-group register">
            <label htmlFor="bizname">Business name:</label>
            <input type="text" id="bizname" className="form-control " placeholder="Business name" />
        </div>

        <div className="form-row">
            <div className="form-group col-md-6 register">
                <label htmlFor="location">Location:</label>
                <input type="text" className="form-control" id="location" placeholder="Location"/>
            </div>
            <div className="form-group col-md-4 register">
                <label htmlFor="category">Category:</label>
                <select id="category" name="category" className="form-control">
                    <option selected>Choose...</option>
                    <option value="Retail">Retail</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Housing">Housing</option>
                    <option>...</option>
                </select>
            </div>
        </div>
        <div className=" form-group register">
            <label htmlFor="bizdescription">Description:</label>
            <textarea className="form-control" rows="7" id="bizdescription" placeholder="Describe your business" />
        </div>

        <div className=" form-group register">
            <button type="submit" className="btn btn-primary btn-block">Register Business</button>
        </div>

    </form>
);

export default RegistrationForm;
