import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Actions from '../../actions/business';


class ReviewForm extends Component {
  static PropTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    actions: PropTypes.object
  }

  state ={
    id: this.props.id || '',
    title: this.props.title || '',
    description: this.props.description || ''

  }

  handleSubmit = e => {
    e.preventDefault();

    const { title, description } = this.state;
    this.handleSave(title, description);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSave = (title, description) => {
    this.props.actions.postReview(this.state.id, title, description);
  }

  render() {
    return (
      <div>
        <div className="wrap forms review">
          <div className="card profile">
            <div className="card-header">
              Review Form
            </div>
            <form onSubmit={this.handleSubmit} className="review-form">
              <div className="form-group review">
                <label className="lbl" htmlFor="reviewtitle">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>

              <div className=" form-group review">
                <label htmlFor="reviewdesc">Review:</label>
                <textarea
                  className="form-control"
                  rows="4" id="reviewdesc"
                  name="description"
                  placeholder="Write your review"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>

              <div className=" form-group review">
                <button type="submit" className="btn btn-primary btn-block">Post review</button>
              </div>
            </form>
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
)(ReviewForm);
