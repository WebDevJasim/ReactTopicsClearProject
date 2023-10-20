import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Popup = ({navigation}) => {
  //   const temp = () => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 1000);
  }, []);
  //   };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
        Welcome !!
      </Text>
    </View>
  );
};

export default Popup;
