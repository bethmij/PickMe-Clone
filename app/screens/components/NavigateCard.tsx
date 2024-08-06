import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination, setIsRideOptions } from '@/slices/navSlice'
import { Href, router, useRouter } from 'expo-router';
import NavFavorite from './NavFavorite';
import { GOOGLE_MAP_KEY } from '@env';



const NavigateCard = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const route = '../components/RideOptions' as Href<string | object>;

  return (
    
    <View>
      <GooglePlacesAutocomplete
        placeholder='Where from?'
        styles={{
        container:{
            flex:0,
        },
        textInput:{
            fontSize: 18,
        },
        }}
        
        onPress={(data, details = null) => {
        if (details) {
            dispatch(setDestination({
            location: details.geometry.location,
            description: data.description,
            }));
            dispatch(setIsRideOptions(true));
        }
        
        }}
        
        enablePoweredByContainer={false}                
        fetchDetails={true}
        minLength={2}
        query={{
        key:GOOGLE_MAP_KEY,
        language: 'en', 
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={100}            
         />    
         <NavFavorite/>  
                     
    </View>
  )
}

export default NavigateCard

