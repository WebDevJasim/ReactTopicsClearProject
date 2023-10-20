import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Search from './Search';
import Reels from './Reels';
import BottomHome from './BottomHome';
import Profile from './Profile';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BottomHome" component={BottomHome} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
