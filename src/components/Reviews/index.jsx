import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as Actions from '../../actions/business';

class Reviews extends Component {
  componentDidMount() {
    this.props.actions.getBusiness(this.state.id);
    this.props.actions.getReviews(this.state.id);
  }

static PropTypes = {
  id: PropTypes.string,
  getReviews: PropTypes.func,
  reviews: PropTypes.array,
  actions: PropTypes.object
};

state = {
  id: this.props.id || ''
}

render() {
  let reviewss = Object.assign([], this.props.reviews.state);

  let r = reviewss.reviews;

  let reviews = Object.assign([], r);
  const reviewItems = reviews.map(review => (
    <div key={review.id}>
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          <div className="d-flex justify-content-between">
            <h5>{review.title}</h5>
            <small>3 days ago</small>
          </div>
          <p>{review.description}</p>
          <small>Review by {review.Reviewer}</small>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      {reviewItems}
    </div>
  );
}
}

const mapStateToProps = state => ({
  reviews: state.businesses,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
