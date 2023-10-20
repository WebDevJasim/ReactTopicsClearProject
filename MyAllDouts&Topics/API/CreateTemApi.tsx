import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import axios from 'axios';

const CreateTemApi = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  console.log(name, email);

  //   Assuming you have the API endpoint URL and the data you want to send
  //   const apiUrl = 'https://reqres.in/api/users?page=2';
  //   const postData = {
  //     username: name,
  //     useremail: email,
  //   };

  //   fetch(apiUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Add any additional headers required by the API
  //     },
  //     body: JSON.stringify(postData),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the response data
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //       console.error(error);
  //     });

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 29,
            marginBottom: 25,
            marginTop: 20,
          }}>
          Create Temporary Api
        </Text>
        <TextInput
          placeholder="name"
          textColor="white"
          value={name}
          onChangeText={setname}
          style={{
            borderWidth: 1,
            backgroundColor: 'black',
            width: '90%',
            margin: 5,
            fontWeight: 'bold',
          }}
        />
        <TextInput
          placeholder="email"
          textColor="white"
          value={email}
          onChangeText={setemail}
          style={{
            borderWidth: 1,
            backgroundColor: 'black',
            width: '90%',
            margin: 5,
            fontWeight: 'bold',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateTemApi;
