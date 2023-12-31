import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
	const Stack = createStackNavigator();
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity
				onPress={() => navigation.navigate('HomeScreen')}
				style={tw`bg-gray-100 absolute top-15 left-6 z-50 rounded-full shadow-lg p-3`}>
				<Icon
					name='menu'
				/>
			</TouchableOpacity>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='NavigateCard' component={NavigateCard} />
					<Stack.Screen name='RideOptionsCard' component={RideOptionsCard} />
				</Stack.Navigator>
			</View>
		</View>
	)
}

export default MapScreen

const styles = StyleSheet.create({})