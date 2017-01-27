import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ShowList from './ShowList';
import * as showsActions from '../../actions/tvShowActions'

class ShowsPage extends React.Component {
  constructor(props, context)
  {
    super(props, context);
  }

  render() {
    const {shows} = this.props;

    return (
      <div>
        <h1>Shows</h1>
        <ShowList shows={shows}/>
      </div>
    );
  }
}

ShowsPage.propTypes = {
  shows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {shows: state.shows};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(showsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsPage);
