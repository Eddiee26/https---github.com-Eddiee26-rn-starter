import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MyFirstComponent from './src/screens/MyFirstComponent';
import ListScreen from './src/screens/ListScreenButton';
import ImageScreen from './src/screens/ImageScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Learning react app'}}
        />
         <Stack.Screen
          name="Component"
          component={MyFirstComponent}
        />
        <Stack.Screen
        name='ListComponet'
          component={ListScreen}
        />
        <Stack.Screen
        name='ImageComponent'
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
