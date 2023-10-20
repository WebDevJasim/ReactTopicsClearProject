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
} from 'react-native';

const Get = () => {
  const [data, setData] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const getdata = () => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => setData(json))
      .catch(error => console.log(error));
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.main}>
          <View>
            {data.map((post) => {
              return (
                <View>
                  <Text>{post.title}</Text>
                  <Text>{post.body}</Text>
                </View>
              );
            })}
          </View>

          <TouchableOpacity style={styles.btnview} onPress={getdata}>
            <Text style={styles.btntxt}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    width: 300,
    height: 500,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 50,
    marginLeft: 50,
  },
  btnview: {
    width: 100,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginTop: 550,
    marginLeft: 100,
  },
  btntxt: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});
export default Get;
