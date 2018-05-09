import React from 'react';

const CatalogSearch = () => (
    <div className ="search">
        <form className= "form-inline"action="#">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-success" type="submit">Search</button>

            <div className="form-group catalog">
                <label htmlFor="bizcategory">Category:</label>
                <select id="bizcategory" name="category">
                    <option value="Retail">Retail</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Housing">Housing</option>
                </select>
            </div>

            <div className="form-group catalog">
                <label htmlFor="bizlocation">Location:</label>
                <select id="bizlocation" name="location">
                    <option value="Nairobi">Nairobi</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Mombasa">Mombasa</option>
                </select>
            </div>
        </form>
    </div>
);

export default CatalogSearch;
