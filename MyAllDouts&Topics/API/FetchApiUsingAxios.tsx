import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import axios from 'axios';

const FetchApiUsingAxios = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://content.guardianapis.com/search?api-key=4181525a-7424-4f88-9fc9-46844e234220',
      );
      setData(response.data.response.results);
      //   console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {
            <View>
              {data.map(item => (
                <Text key={item.id}>{item.webTitle}</Text>
              ))}
            </View>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FetchApiUsingAxios;
