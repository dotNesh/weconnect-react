import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CatalogSearch from '../CatalogSearch';


import * as Actions from '../../actions/business';

class CatalogComponent extends Component {
  componentDidMount() {
    this.props.actions.getBusinesses();
  }

  handlePageChange = (url) => {
    this.props.actions.getBusinesses(url);
  }

  render() {
    console.log("hahahahaa", this.props);
    const businessItems = this.props.businesses.map(business => (
      <div key={business.business_id}>
        <div className="col-sm-12">
          <div className="card text-center">
            <div className="card-header">
              {business.business_name}
            </div>
            <div className="card-body">
              <p className="card-title">{business.description}</p>
              <Link to={`/businessprofile/${business.business_id}`}>Profile</Link>
            </div>
            <div className="card-footer text-muted">
              {business.location}
            </div>
          </div>
        </div>
      </div>

    ));
    return (
      <div className="container">
        <div className="list-group">
          <div className="row">
            <div className="col-sm-4 sidenav">
              <CatalogSearch
                business={this.props.businesses}
                onSearch={this.handlePageChange}
                page={this.props.page}
                npage={this.props.npage}
                ppage={this.props.ppage}
              />
            </div>
            <div className="col-sm-8">
              <div className = "row">
                { businessItems }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CatalogComponent.PropTypes = {
  getBusinesses: PropTypes.func,
  businesses: PropTypes.array,
  page: PropTypes.array,
  actions: PropTypes.object
};

const mapStateToProps = state => ({
  businesses: state.businesses.businesses,
  page: state.businesses.page,
  npage: state.businesses.npage,
  ppage: state.businesses.ppage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogComponent);

