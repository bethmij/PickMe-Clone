import { StyleSheet, Text, Alert, View, TouchableOpacity,TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { setOrigin } from '@/slices/navSlice';
import MapViewCard from '../components/MapViewCard';
import { Button, Icon } from 'react-native-elements';
import { router } from 'expo-router';

const LocationView = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Location Loading...');
  const dispatch = useDispatch();
  
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  // Check if location services are enabled
  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert('Location not enabled', 'Please enable your Location', [
        { text: 'OK' },
      ]);
    }
  };

  // Get current location
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Allow the app to use the location services', [
        { text: 'OK' },
      ]);
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      const location = { lat: latitude, lng: longitude };
      dispatch(setOrigin({
        location: location,
        description: displayCurrentAddress,
      }));

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name}, ${item.city}, ${item.region}, ${item.country}`;
        setDisplayCurrentAddress(address);
        dispatch(setOrigin({
          location: location,
          description: address,
        }));
      }
    }
  };

  return (
    <SafeAreaView className="flex-1">

      <TouchableOpacity className="absolute top-10 left-10 z-50 bg-gray-300 rounded-full p-2 shadow-2xl shadow-black"
        onPress={()=>router.back()}>
          <Icon
            name="arrow-back"
            type="ionicon"
            color="black"
            size={20}
          />
      </TouchableOpacity> 

      <View className="absolute bottom-10 left-10 rounded-full z-50 w-5/6 h-1/6 bg-white">
       
        <View className="absolute bottom-0 left-0 right-0 shadow-2xl shadow-black bg-white p-4 rounded-3xl">
            <View className="flex-row justify-around items-center w-full">
              <TouchableOpacity className='bg-gray-100 w-1/2 rounded-3xl'>
                <Text className="text-sm text-center">One way</Text>
              </TouchableOpacity>
              <TouchableOpacity className="ml-5">
                <Text className="text-sm">Return trip</Text>
              </TouchableOpacity>          
            </View>

         
          <TouchableOpacity 
            className="mt-4 flex flex-row items-center w-full gap-x-10"
            onPress={() => router.push('PickupScreen')} 
          >
            <Text className="text-blue-500 font-bold text-sm">PICKUP</Text>
            <Text className="pt-1 text-gray-500 text-sm ">Your location</Text>
          </TouchableOpacity>

         <View className='w-full h-[0.5] bg-gray-400 mt-3'></View>
         <TouchableOpacity 
            className="mt-4 flex flex-row items-center w-full gap-x-12"
            onPress={() => router.push('PickupScreen')} 
          >
            <Text className="text-orange-500 font-bold text-sm">DROP</Text>
            <Text className="pt-1 text-gray-500 text-sm "> Where are you going?</Text>
          </TouchableOpacity>

        </View>
      </View>

     
  

      {displayCurrentAddress !== "Location Loading..." && <MapViewCard />}
  </SafeAreaView>
  );
};

export default LocationView;
