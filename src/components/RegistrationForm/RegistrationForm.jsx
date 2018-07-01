import React from 'react';

const RegistrationForm = (props) => (
  <div className="container">
    <div className="wrap forms">
      <h2>Register a Business</h2>
      <form onSubmit={props.handleSubmit} className="register-form">
        <div className="form-group register">
          <label htmlFor="businessName">Business name:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            className="form-control "
            placeholder="Business name"
            value={props.state.businessName}
            onChange={props.handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group register">
            <label htmlFor="location">Loction:</label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-control "
              placeholder="Enter location"
              value={props.state.location}
              onChange={props.handleChange}
              required
            />
          </div>

          <div className="form-group col-md-4 register">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              className="form-control"
              value={props.state.category}
              onChange={props.handleChange}
              required
            >
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
          <textarea
            className="form-control"
            rows="7" id="bizdescription"
            placeholder="Describe your business"
            name="description"
            value={props.state.description}
            onChange={props.handleChange}
            required
          />
        </div>

        <div className=" form-group register">
          <button type="submit" className="btn btn-primary btn-block">Register Business</button>
        </div>
      </form>
    </div>
  </div>
);

export default RegistrationForm;
