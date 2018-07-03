import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


import * as Actions from '../../actions/business';

class EditForm extends Component {
static PropTypes = {
  business_id: PropTypes.string,
  category: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  editBusinesses: PropTypes.func,
  actions: PropTypes.object
}

state ={
  id: this.props.id || '',
  category: this.props.category,
  description: this.props.description,
  location: this.props.location
}

handleSubmit = e => {
  e.preventDefault();

  const { category, location, description } = this.state;
  this.handleSave(category, location, description);
}

handleChange = e => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}

handleSave = (category, location, description) => {
  this.props.actions.editBusinesses(this.state.id, category, location, description);
}

render() {
  console.log("category", this.props);
  console.log("category2", this.state.category);
  return (
    <div>
      <button className="i" data-toggle="modal" data-target=".editform">Edit <i className="fa fa-edit" /></button>
      <div>
        <div className="modal fade editform" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <label>Edit Form</label>
              <form onSubmit={this.handleSubmit} className="register-form">
                <div className="form-row">
                  <div className="form-group register">
                    <label htmlFor="location">Location:</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="form-control "
                      placeholder={this.props.location}
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group col-md-4 register">
                    <label htmlFor="category">Category:</label>
                    <select
                      id="category"
                      name="category"
                      className="form-control"
                      value={this.state.category}
                      onChange={this.handleChange}
                    >
                      <option selected>{this.props.category}</option>
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
                    placeholder={this.props.description}
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>

                <div className=" form-group register">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

const mapStateToProps = state => ({
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);

