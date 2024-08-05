import { StyleSheet, Text, Alert, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { setOrigin } from '@/slices/navSlice';
import MapViewCard from '../components/MapViewCard';

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
    <SafeAreaView className='flex-1'>
      {displayCurrentAddress!=="Location Loading..." && <MapViewCard />}
    </SafeAreaView>
  );
};

export default LocationView;
