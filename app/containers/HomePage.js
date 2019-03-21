import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as HomeActions from '../actions/home';

function mapStateToProps(state) {
	return {
		backlog: state.home.backlog,
		planning: state.home.planning,
		progress: state.home.progress,
		done: state.home.done
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
