import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomNavigator from '../screens/BOTTOM/BottomNavigator';

const HomeScreen = () => {
  return (
    <BottomNavigator />
    // <SafeAreaView
    //   style={{width: '100%', height: '100%', backgroundColor: 'silver'}}>
    //   <View>
    //     <Text>HomeScreen</Text>
    //   </View>
    // </SafeAreaView>
  );
};

export default HomeScreen;
