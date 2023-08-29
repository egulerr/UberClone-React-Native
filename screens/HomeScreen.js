import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { APIKEY } from "@env";
import { setOrigin, setDestination } from "../slices/navSlice";
import { useDispatch } from 'react-redux';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
	const dispatch = useDispatch();
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{ width: 100, height: 100, resizeMode: 'contain', marginLeft: 7 }}
					source={{ uri: "https://links.papareact.com/gzs" }}>
				</Image>
				<GooglePlacesAutocomplete
					placeholder='Where from?'
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18
						},
					}}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description
							}))
						dispatch(setDestination(null));
					}}
					fetchDetails={true}
					returnKeyType={"search"}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: APIKEY,
						language: "en",
					}}
					debounce={400}
				/>
				<NavOptions />
				<NavFavourites />
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})