import { KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store";
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

export default function App() {
	const Stack = createStackNavigator();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
						style={{ flex: 1 }}>
						<Stack.Navigator screenOptions={{ headerShown: false }}>
							<Stack.Screen name='HomeScreen' component={HomeScreen} />
							<Stack.Screen name='MapScreen' component={MapScreen} />
						</Stack.Navigator>
					</KeyboardAvoidingView>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

