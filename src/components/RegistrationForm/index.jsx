import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RegistrationForm from './RegistrationForm';

import { registerBusiness } from '../../actions/business';

class BusinessAddComponent extends Component {
    static propTypes = {
      businessName: PropTypes.string,
      category: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      actions: PropTypes.object
    }

    state = {
      businessName: this.props.businessName || '',
      category: this.props.category || '',
      location: this.props.location || '',
      description: this.props.description || ''
    }

    handleSubmit = e => {
      e.preventDefault();

      const {
        businessName, category, location, description
      } = this.state;
      this.handleSave(businessName, category, location, description);
    }

    handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

        handleSave = (businessName, category, location, description) => {
          this.props.registerBusiness(businessName, category, location, description);
        }

        render() {
          return (
            <div>
              <RegistrationForm
                state={this.state}
                handleSubmit={this.handleSubmit}
                onSave={this.handleSave}
                handleChange={this.handleChange}
              />
            </div>
          );
        }
}
const mapStateToProps = state => ({
  business: state.business
});

const mapDispatchToProps = dispatch => ({
  registerBusiness: bindActionCreators(registerBusiness, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessAddComponent);

