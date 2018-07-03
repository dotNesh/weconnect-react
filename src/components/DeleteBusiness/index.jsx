import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as Actions from '../../actions/business';

class DeleteBusiness extends Component {
static PropTypes = {
  business_id: PropTypes.string,
  actions: PropTypes.object
}

state ={
  id: this.props.id || '',

}


handleSave = () => {
  this.props.actions.deleteBusinesses(this.state.id);
}

render() {
  return (
    <div>
      <button className="i" data-toggle="modal" data-target=".delete">Delete <i className="material-icons" >delete</i></button>
      <div>
        <div className="modal fade delete" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <label>Are you sure you want to delete this business?</label>
              <input type="hidden" id="delete_item_id" name="option" value="delete" />
              <div className="modal-footer">
                <button onClick={this.handleSave} type="submit" className="btn btn-danger">Yes</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">No</button>
              </div>
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
)(DeleteBusiness);

