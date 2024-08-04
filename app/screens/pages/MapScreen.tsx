import { View } from 'react-native';
import React from 'react';
import {selectIsRideOptions } from '@/slices/navSlice'
import { useSelector } from 'react-redux';


const Maps = () => {

  const isRideOptions = useSelector(selectIsRideOptions);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* <MapViewCard /> */}
      </View>
      <View style={{ flex: 1 }}>
      
      </View>
    </View>
  );
};

export default Maps;
