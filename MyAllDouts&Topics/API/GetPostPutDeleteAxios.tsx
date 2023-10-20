// import React from 'react';
// import {View, Button} from 'react-native';
// import axios from 'axios';

// const API_URL = 'https://example.com/api';

// const GetPostPutDeleteAxios = () => {
//   const handlePatchRequest = async () => {
//     try {
//       const response = await axios.patch(`${API_URL}/endpoint`, {
//         data: 'your data',
//       });
//       console.log(response.data); // Handle the response data here
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handlePostRequest = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/endpoint`, {
//         data: 'your data',
//       });
//       console.log(response.data); // Handle the response data here
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteRequest = async () => {
//     try {
//       const response = await axios.delete(`${API_URL}/endpoint`);
//       console.log(response.data); // Handle the response data here
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Patch Request" onPress={handlePatchRequest} />
//       <Button title="Post Request" onPress={handlePostRequest} />
//       <Button title="Delete Request" onPress={handleDeleteRequest} />
//     </View>
//   );
// };

// export default GetPostPutDeleteAxios;
// ======================================================================================
import React, {useEffect} from 'react';
import axios from 'axios';

const API_URL = 'https://api.example.com';

const GetPostPutDeleteAxios = () => {
  useEffect(() => {
    fetchData();
    postData();
    updateData();
    deleteData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/data`);
      console.log('GET Request:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const postData = async () => {
    try {
      const data = {
        name: 'John Doe',
        email: 'johndoe@example.com',
      };

      const response = await axios.post(`${API_URL}/data`, data);
      console.log('POST Request:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateData = async () => {
    try {
      const data = {
        name: 'Updated Name',
        email: 'updatedemail@example.com',
      };

      const response = await axios.put(`${API_URL}/data/1`, data);
      console.log('PUT Request:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteData = async () => {
    try {
      const response = await axios.delete(`${API_URL}/data/1`);
      console.log('DELETE Request:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <></>;
};

export default GetPostPutDeleteAxios;
