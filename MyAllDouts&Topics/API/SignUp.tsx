import React, {useState} from 'react';
import {View, TextInput, Button, Alert, SafeAreaView} from 'react-native';
import axios from 'axios';

const SignUp = () => {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        'https://wtsacademy.dedicateddevelopers.us/api/user/signup',
        {
          first_name,
          last_name,
          email,
          password,
        },
      );
      // Handle successful sign-up response
      console.log(response.data);
      // Display success message or navigate to the next screen
      Alert.alert('Success', 'Sign-up successful!');
    } catch (error) {
      // Handle sign-up error
      console.log(error);
      // Display error message
      Alert.alert('Error', 'Sign-up failed. Please try again.');
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="First Name"
          value={first_name}
          onChangeText={setFirstname}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Last Name"
          value={last_name}
          onChangeText={setLastname}
          autoCapitalize="none"
        />
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
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
