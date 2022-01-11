import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabRouter from './screens/TabRouter';
export default function App() {
  return (
	//wraps root navigator to maintain the state
	<NavigationContainer>
	  <TabRouter />
	</NavigationContainer>
  );
}



