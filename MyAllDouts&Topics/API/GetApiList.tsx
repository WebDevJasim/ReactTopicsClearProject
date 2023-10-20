import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
const GetApiList = () => {
  const [data, setData] = useState([]);
  console.log('getapidata from  guardianapis.com : ' + data);

  const getapidata = async () => {
    try {
      const url = await fetch(
        'https://content.guardianapis.com/search?api-key=4181525a-7424-4f88-9fc9-46844e234220',
        // 'https://content.guardianapis.com/search?api-key=test',
      );
      const jsonData = await url.json();
      setData(jsonData.response.results); // help by chatGPT
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getapidata();
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          GetApiList from api using fetch
        </Text>
      </View>
      <View style={{backgroundColor: 'silver'}}>
        <FlatList
          data={data}
          // renderItem={renderItem}
          renderItem={({item}) => {
            return (
              <View style={{padding: 10, backgroundColor: 'silver'}}>
                <View
                  style={{
                    // padding: 15,
                    backgroundColor: 'white',
                    width: '100%',
                    height: 240,
                    borderRadius: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      backgroundColor: 'white',
                      width: '90%',
                      marginBottom: 10,
                    }}>
                    {item.sectionName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 19,
                      color: 'black',
                      fontWeight: '400',
                      textAlign: 'center',
                      backgroundColor: 'whitesmoke',
                      width: '90%',
                    }}>
                    {item.webTitle}
                  </Text>
                  <Text
                    style={{
                      color: 'blue',
                      textAlign: 'center',
                      paddingTop: 10,
                      paddingBottom: 10,
                      backgroundColor: 'white',
                      width: '90%',
                    }}>
                    {item.webUrl}
                  </Text>
                </View>
              </View>
            );
          }}
          // keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetApiList;
