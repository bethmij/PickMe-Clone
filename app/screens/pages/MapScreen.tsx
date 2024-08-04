import { View } from 'react-native';
import React from 'react';
import {selectIsRideOptions } from '@/slices/navSlice'
import { useSelector } from 'react-redux';
import MapViewCard from './components/MapViewCard';
import RideOptions from './components/RideOptions';
import NavigateCard from './components/NavigateCard';


const Maps = () => {

  const isRideOptions = useSelector(selectIsRideOptions);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapViewCard />
      </View>
      <View style={{ flex: 1 }}>
      {isRideOptions ? (
          <RideOptions />
        ) : (
          <NavigateCard/>
        )}   
      </View>
    </View>
  );
};

export default Maps;
