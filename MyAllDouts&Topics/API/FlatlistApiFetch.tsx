import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];
const FlatlistApiFetch = () => {
  const [DATA, setDATA] = useState([]);
  const Getapidata = async () => {
    try {
      const url = await fetch(
        // 'https://content.guardianapis.com/search?api-key=4181525a-7424-4f88-9fc9-46844e234220',
        'https://jsonplaceholder.typicode.com/posts',
      );
      const response = await url.json();
      setDATA(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: 'red',
              fontWeight: '900',
            }}>
            FlatlistApiFetch
          </Text>
        </View>
        <FlatList
          style={{width: '100%', height: 600, backgroundColor: 'whitesmoke'}}
          data={DATA}
          renderItem={({item}) => {
            return (
              <View style={{backgroundColor: 'white', width: '100%'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 19}}>
                    {item.id}
                  </Text>
                  <Text style={{fontSize: 19}}>{item.title}</Text>
                </View>
                <View>
                  <Text>{item.body}</Text>
                </View>
              </View>
            );
          }}
          // keyExtractor={item => item.id}
        />
      </ScrollView>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'red',
          width: 90,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}
        onPress={Getapidata}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FlatlistApiFetch;
