import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import loginimage from '../images/Loginimage.jpeg';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [username, setusername] = useState('');
  const [userpassword, setuserpassword] = useState('');

  const storeData = async () => {
    try {
      if (username == '' && userpassword == '') {
        Alert.alert('pls enter email & password');
      } else {
        // const jsonValue1 = JSON.stringify(username);
        await AsyncStorage.setItem('userName', username);
        // const jsonValue2 = JSON.stringify(userpassword);
        await AsyncStorage.setItem('userPassword', userpassword);
        navigation.navigate('Login');
        // console.log(
        //   typeof jsonValue1,
        //   jsonValue1,
        //   typeof jsonValue2,
        //   jsonValue2,
        // );
      }
    } catch (e) {
      // saving error
    }
  };

  const temp = () => {
    console.warn('signin' + username, userpassword);
  };
  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'grey'}}>
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
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
              SignIn
            </Text>
            <View style={{marginTop: 40}}>
              <TextInput
                value={username}
                onChangeText={setusername}
                placeholder="name/phone"
                placeholderTextColor={'white'}
                style={{
                  width: 350,
                  height: 40,
                  borderWidth: 1,
                  borderColor: 'white',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 17,
                  paddingLeft: 10,
                  color: 'white',
                  borderRadius: 20,
                }}
              />
              <TextInput
                value={userpassword}
                onChangeText={setuserpassword}
                style={{
                  width: 350,
                  height: 40,
                  borderWidth: 1,
                  borderColor: 'white',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 17,
                  paddingLeft: 10,
                  color: 'white',
                  borderRadius: 20,
                }}
                placeholder="password"
                placeholderTextColor={'white'}
              />
              <View style={{alignItems: 'center', marginTop: 25}}>
                <TouchableOpacity
                  // onPress={temp}
                  onPress={storeData}
                  style={{
                    width: 250,
                    height: 40,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}>
                  <Text style={{color: 'black', fontSize: 17}}>SignUp</Text>
                </TouchableOpacity>
                {/* ------------------------------------------------------------------ */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text style={{color: 'whitesmoke', marginTop: 15}}>
                    already user ?
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                    style={{
                      // width: 160,
                      // height: 35,
                      // backgroundColor: 'black',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 15,
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
