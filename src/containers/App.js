import { connect } from 'react-redux';
import App from '../App';
import Actions from '../actions/AppActions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMessageAdd(value) {
      dispatch(Actions.addMessage(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
