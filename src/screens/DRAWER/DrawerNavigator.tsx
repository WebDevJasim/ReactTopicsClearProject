import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHome from './DrawerHome';
import DrawerSettings from './DrawerSettings';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen name="DrawerSettings" component={DrawerSettings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
