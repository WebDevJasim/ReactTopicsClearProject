import React, {useState} from 'react';
import {View, TextInput, Button, Alert, SafeAreaView} from 'react-native';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        'https://wtsacademy.dedicateddevelopers.us/api/user/signin',
        {
          email,
          password,
        },
      );
      // Handle successful sign-in response
      console.log(response.data);
      // Display success message or navigate to the next screen
      Alert.alert('Success', 'Sign-in successful!');
    } catch (error) {
      // Handle sign-in error
      console.log(error);
      // Display error message
      Alert.alert('Error', 'Sign-in failed. Please try again.');
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign In" onPress={handleSignIn} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
