import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import ViewTransaction from '../screens/ViewTransaction';

export default class Routes extends React.Component {

	render(){
		if(this.props.email != null){
			return(
				<Profile/>
			)
		}else{
			return(
				<Router>
					<Stack key="root" hideNavBar={ true }>
						<Scene key="login" component={Login} title="Login" />
						<Scene key="signup" component={Signup} title="Signup" />
						<Scene key="route" component={Routes} title="Routes" />
						<Scene key="goto" component={ViewTransaction} title="View Transaction" />
					</Stack>
				</Router>
			)
		}
	}
}