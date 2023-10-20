import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../splash/Splash';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Signup from './Signup';
import Popup from '../splash/popup';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false, headerBackButtonMenuEnabled: false}}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Popup" component={Popup} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
