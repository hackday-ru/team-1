'use strict';

import React, {
	Component
} from 'react-native';
import {
	actions as routerActions,
	NavBar,
	Route,
	Router,
	Schema
} from 'react-native-router-redux';
import { connect } from 'react-redux';
import { combineReducers, bindActionCreators } from 'redux';
import Launch from '../components/Launch';
import Home from '../components/Home';
import { increment } from '../actions/homeActions';

const mapStateToProps = state => ({
	router: state.router,
	home: state.home
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(routerActions, dispatch),
	homeActions: bindActionCreators({
		increment
	}, dispatch),
	dispatch
});

const defaultSchema = {
	navBar: NavBar
};

class App extends Component {
	render() {
		return (
			<Router {...this.props} initial="launch">
				<Schema name="default" {...defaultSchema} />
				<Route name="launch" component={Launch} title="Launch" />
				<Route name="home" component={Home} title="Home" />
			</Router>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);