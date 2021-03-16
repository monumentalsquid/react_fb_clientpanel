import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit } from '../../actions/settingsActions';

class Settings extends Component {

  disableBalanceOnAddChange = () => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  };

  disableBalanceOnEditChange = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  };

  allowRegistrationChange = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  };

  render() {

    const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration } = this.props.settings;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left"></i>{' '}Back to Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
              <input 
                  type="checkbox" 
                  name="allowRegistration" 
                  checked={!!allowRegistration} 
                  onChange={this.allowRegistrationChange} 
                />{'  '}
                <label>Allow Registration</label>
              </div>
              <div className="form-group">
              <input 
                  type="checkbox" 
                  name="disableBalanceOnAdd" 
                  checked={!!disableBalanceOnAdd} 
                  onChange={this.disableBalanceOnAddChange} 
                />{'  '}
                <label>Disable Balance On Add</label> 
              </div>
              <div className="form-group">
              <input 
                  type="checkbox" 
                  name="allowRegistration" 
                  checked={!!disableBalanceOnEdit} 
                  onChange={this.disableBalanceOnEditChange} 
                />{'  '}
                <label>Disable Balance on Edit</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Settings.PropTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
}

export default connect((state, props) => ({
  auth: state.firebase.auth,
  settings: state.settings
}), 
  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
