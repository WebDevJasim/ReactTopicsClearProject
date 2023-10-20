import React from 'react';
import Splash from './src/splash/Splash';
import AppNavigator from './src/screens/AppNavigator';
import CreateTemApi from './MyAllDouts&Topics/API/CreateTemApi';
import Post from './MyAllDouts&Topics/API/Post';
import Get from './MyAllDouts&Topics/API/Get';
import GetApiList from './MyAllDouts&Topics/API/GetApiList';
import FlatlistApiFetch from './MyAllDouts&Topics/API/FlatlistApiFetch';
import FetchImageApi from './MyAllDouts&Topics/API/FetchImageApi';
import SignIn from './MyAllDouts&Topics/API/SignIn';
import SignUp from './MyAllDouts&Topics/API/SignUp';
import FetchApiUsingAxios from './MyAllDouts&Topics/API/FetchApiUsingAxios';
import Fakeapi from './MyAllDouts&Topics/Doubts/Fakeapi';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  return (
    // <Fakeapi />
    // <FetchApiUsingAxios />
    // <SignUp />
    // <SignIn />
    // <FetchImageApi />
    // <FlatlistApiFetch />
    // <GetApiList />
    // <Get />
    // <Post />
    // <CreateTemApi />
    // <Splash />
    <AppNavigator />
  );
}

export default App;
