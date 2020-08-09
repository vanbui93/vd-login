import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewEventAction } from './../../../actions/eventActions';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isLoading: false
    };
  }

  onChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true })
    this.props.addNewEventAction(this.state);
  }

  render() {
    const { title, isLoading } = this.state;

    return (
      <div className="card mt-5">
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <h1 className="mb-5">Create New Game Event</h1>

            <div className="form-inline">
              <div className="form-group">
                <input
                  field="title"
                  className="form-control mr-1"
                  label="Event Title"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>Create</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

EventForm.propTypes = {
  addNewEventAction: PropTypes.func.isRequired
}

export default connect(null, { addNewEventAction })(EventForm);