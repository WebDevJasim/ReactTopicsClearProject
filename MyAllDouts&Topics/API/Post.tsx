import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Post = () => {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const body = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  };

  const formBody = Object.keys(body)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
    .join('&');

  const savedata = () => {
    fetch('https://wtsacademy.dedicateddevelopers.us/api/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(responsedata => {
        console.log(JSON.stringify(responsedata));
        var showmsg = responsedata.message;
        setMsg(showmsg);
      });
    // .done()
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <TextInput
          placeholder="First name"
          style={styles.input}
          onChangeText={value => setFirstname(value)}
        />
        <TextInput
          placeholder="Last name"
          style={styles.input}
          onChangeText={value => setLastname(value)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={value => setEmail(value)}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={value => setPassword(value)}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.btnview} onPress={savedata}>
          <Text style={styles.btntxt}>Signup</Text>
        </TouchableOpacity>
        {/* {
                    data.map((item) => {
                        return (
                            <View key={item[1].meta.uuid}>
                                <Text>{item[1].shortdef[0]}</Text>
                            </View>
                        )
                    })
                } */}

        <Text>{msg}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    width: 300,
    height: 700,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 50,
    marginLeft: 50,
  },
  btnview: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginTop: 50,
    marginLeft: 100,
  },
  btntxt: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 6,
  },
  input: {
    width: 200,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 50,
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Post;
