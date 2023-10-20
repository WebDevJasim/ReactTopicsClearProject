import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);
  return (
    // <SafeAreaView>
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 30}}>Social App</Text>
    </View>
    // </SafeAreaView>
  );
};

export default Splash;
