import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import MyCars from '../screens/MyCars';
import ViewCar from '../screens/ViewCar';
import AddCar from '../screens/AddCar';

export default class CarRoutes extends React.Component {
	render(){
		return(
			<Router>
				<Stack key="root" hideNavBar={ true }>
					<Scene key="cars" component={MyCars} title="My Cars" />
					<Scene key="view" component={ViewCar} title="" />
					<Scene key="add" component={AddCar} title="Add a car" />
				</Stack>
			</Router>
		)
	}
}