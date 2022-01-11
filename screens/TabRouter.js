import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
// add tabs at the bottom of the screen
const Tabs = createBottomTabNavigator();
export default function TabRouter() {
  return (
	<Tabs.Navigator>
	  <Tabs.Screen name="Home" component={HomeScreen} />
	  <Tabs.Screen name="About" component={AboutScreen} />
	</Tabs.Navigator>
  );
}
