import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const FetchImageApi = () => {
  const [imagedata, setimagedata] = useState([]);

  const GetImage = async () => {
    try {
      const url = await fetch(
        'https://api.unsplash.com/photos/?client_id=FqvFFCDXmTN-pIFuzhG4-ONzDYUDLQ9-KepecIpfPAM',
      );
      const jsonData = await url.json();
      setimagedata(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetImage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeview}>
        <Text style={styles.hometxt}>Home FetchImageApi List</Text>
      </View>
      <View style={styles.container2}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={imagedata}
            renderItem={({item}) => {
              return (
                <View style={styles.flatlistContainer}>
                  <View style={styles.flatlistContainer2}>
                    {/* <Text>{item.id}</Text> */}
                    <TouchableOpacity>
                      <Text style={styles.flatlistText}>{item.user.name}</Text>
                    </TouchableOpacity>

                    <Image
                      style={styles.image}
                      source={{uri: item.urls.small}}
                    />
                    <TouchableOpacity>
                      <Text style={styles.likes}>Likes {item.likes}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            // keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FetchImageApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    width: '100%',
    height: '90%',
    backgroundColor: 'brown',
    alignItems: 'center',
  },
  homeview: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hometxt: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'red',
    textShadowRadius: 3,
  },
  image: {
    // width: 350,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    margin: 0,
    padding: 0,
    alignSelf: 'center',
  },
  flatlistContainer: {
    width: '100%',
    backgroundColor: 'whitesmoke',
  },
  flatlistContainer2: {
    width: 375,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    // borderWidth: 1,
    marginTop: 20,
  },
  flatlistText: {
    // color: 'white',
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  likes: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 13,
    paddingTop: 5,
  },
});
