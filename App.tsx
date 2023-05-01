import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MyFirstComponent from './src/screens/MyFirstComponent';
import ListScreen from './src/screens/ListScreenButton';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/Counter';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

const App = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Learning react app' }}
				/>
				<Stack.Screen name="Component" component={MyFirstComponent} />
				<Stack.Screen name="ListComponet" component={ListScreen} />
				<Stack.Screen name="ImageComponent" component={ImageScreen} />
				<Stack.Screen name="Counter" component={CounterScreen} />
				<Stack.Screen name="Color" component={ColorScreen} />
				<Stack.Screen name="Square" component={SquareScreen} />

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
