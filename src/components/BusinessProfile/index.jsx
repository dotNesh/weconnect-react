import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import ReviewForm from '../ReviewForm';
import Reviews from '../Reviews';
import EditForm from '../EditForm';
import DeleteBusiness from '../DeleteBusiness';


import * as Actions from '../../actions/business';

class BusinessProfile extends Component {
  componentDidMount() {
    this.props.actions.getBusiness(this.state.id);
  }

static PropTypes = {
  business_id: PropTypes.string,
}

state ={
  id: this.props.match.params.business_id || ''
}

render() {
  console.log("prpos", this.props.business);
  let business = Object.assign([], this.props.business);
  return (
    <div className="container profile">
      <div className="list-group">
        <div className="row profile">
          <div className="col-sm-4">
            <div className="card profile">
              <div className="card-header">
              Business
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Business Name: {business["Business name"]}</li>
                <li className="list-group-item">Category: {business["Category"]} </li>
                <li className="list-group-item">Location: {business["Location"]}</li>
                <li className="list-group-item">Description: {business["Description"]}</li>
                <li className="list-group-item">Owned By: {business["Created By"]}</li>
              </ul>
              <div>
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-md">
                    <div className="modal-content">
                      <label>Reviews</label>
                      <Reviews id={this.state.id}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <ReviewForm id={this.state.id} />
          </div>
          <div className="col-sm-4">
            { this.props.user.isAuthenticated ?
              <div>
                <DeleteBusiness id={this.state.id}/>
                <hr/>
                <EditForm id={this.state.id} category={business["Category"]} location={business["Location"]} description={business["Description"]}/>
                <hr/></div> : null}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}

BusinessProfile.PropTypes = {
  getBusiness: PropTypes.func,
  business: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = state => ({
  business: state.businesses.business,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessProfile);

