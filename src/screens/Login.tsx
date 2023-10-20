import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import loginimage from '../images/Loginimage.jpeg';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const getData = async () => {
    try {
      const jsonValue1 = await AsyncStorage.getItem('userName');
      console.log(typeof jsonValue1, jsonValue1);
      const jsonValue2 = await AsyncStorage.getItem('userPassword');
      console.log(typeof jsonValue2, jsonValue2);
      if (name === jsonValue1 && password === jsonValue2) {
        navigation.navigate('Popup');
      } else {
        Alert.alert(`wrong mail or password try again`);
      }
      // return (
      //   jsonValue1 != null ? JSON.parse(jsonValue1) : null,
      //   jsonValue2 != null ? JSON.parse(jsonValue2) : null
      // );
    } catch (e) {
      // error reading value
    }
  };

  const temp = () => {
    console.warn(name, password);
    console.warn(typeof name, typeof password);
  };

  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'transparent'}}>
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <View style={{flex: 1, width: '100%', height: '100%'}}>
          <ImageBackground
            source={loginimage}
            resizeMode="cover"
            style={{flex: 1}}
            blurRadius={5}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  textAlign: 'center',
                  marginTop: 60,
                }}>
                Login
              </Text>
              <View style={{marginTop: 40}}>
                <TextInput
                  placeholder="email or number"
                  placeholderTextColor={'white'}
                  style={styles.name}
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  placeholder="password"
                  placeholderTextColor="white"
                  style={styles.name}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Pressable
                  // onPress={temp}
                  onPress={getData}
                  style={{
                    width: 250,
                    height: 40,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderRadius: 20,
                    marginTop: 40,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                    }}>
                    Sign In
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  // width: 250,
                  // height: 40,
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text style={{color: 'whitesmoke', fontSize: 15}}>
                  Don't Have Account ?
                </Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Signup');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      marginLeft: 10,
                    }}>
                    SignUp
                  </Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  name: {
    borderWidth: 1,
    borderBottomColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // filter: 'blur(10)',
    color: 'white',
    width: 350,
    height: 40,
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 10,
  },
});
