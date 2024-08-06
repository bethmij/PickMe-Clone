import { View,TouchableOpacity } from 'react-native';
import React from 'react';
import {selectIsRideOptions } from '@/slices/navSlice'
import { useSelector } from 'react-redux';
import MapViewCard from '../components/MapViewCard';
import RideOptions from '../components/RideOptions';
import NavigateCard from '../components/NavigateCard';
import { router } from 'expo-router';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


const Maps = () => {

  const isRideOptions = useSelector(selectIsRideOptions);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <TouchableOpacity className="absolute top-5 left-10 z-50 bg-gray-300 rounded-full p-2 shadow-2xl shadow-black"
        onPress={()=>router.back()}>
          <Icon name="arrow-back" type="ionicon" color="black" size={20}/>
      </TouchableOpacity> 
        <MapViewCard />
      </View>
      <View style={{ flex: 1 }}>
      <RideOptions />
      </View>
    </View>
  );
};

export default Maps;
