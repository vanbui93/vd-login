import React, { Component } from 'react';
import { connect } from 'react-redux';
import EvenForm from './EvenForm';
import { bindActionCreators } from 'redux';
import { addNewEventAction } from './../../../actions/eventActions';


class NewEventPage extends Component {
    render() {
        return (
            <div className="container">
                <EvenForm/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewEventAction: bindActionCreators(addNewEventAction, dispatch)
    }
}
export default connect(mapDispatchToProps,)(NewEventPage);