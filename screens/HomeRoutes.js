import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from '../screens/AllCars';
import ViewCar from '../screens/BookCar';

export default class HomeRoutes extends React.Component {
	render(){
		return(
			<Router>
				<Stack key="root" hideNavBar={ true }>
					<Scene key="home" component={Home} title="My Cars" />
					<Scene key="view" component={ViewCar} title="" />
				</Stack>
			</Router>
		)
	}
}