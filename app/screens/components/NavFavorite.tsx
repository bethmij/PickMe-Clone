import {FlatList, TouchableOpacity, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin, setInitialValue, setOrigin } from '@/slices/navSlice';

const NavFavorite = () => {
  const dispatch  = useDispatch();
  const origin = useSelector(selectOrigin);
  const [initialOrigin, setInitialOrigin] = useState({
    description: "No location set",
    location: { lat: 0, lng: 0 },
  });

 
  useEffect(() => {
    if (origin) {
      setInitialOrigin({
        description: origin.description || "No location set",
        location: origin.location || { lat: 0, lng: 0 },
      });
    }
  }, []);
  
  
  const data = [
    {
        id: 1,
        icon: "accessibility",
        location: "Current Location",
        destination: initialOrigin.description, 
        coordinate: initialOrigin.location,    
      },
    {
        id:2,
        icon:"home",
        location:"Home",
        destination: "Hapugala, Galle, Sri Lanka",
        coordinate: { lat: '6.0765847', lng: '80.1958755.' }
    },
    {
        id:3,
        icon:"briefcase",
        location:"Work",
        destination: "Colombo, Sri Lanka",
        coordinate: { lat: '6.9270786', lng: '79.861243' }
    }
]


  return (
    <FlatList
    data={data}
    keyExtractor={item => item.id.toString()}
    ItemSeparatorComponent={() => (
        <View style={{height: 0.5, backgroundColor: 'gray'}} />
    )}
    renderItem={({item}) => (
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', padding: 10}}
        onPress={() => {
            dispatch(setOrigin({
                location: item.coordinate,
                description: item.destination,
              }));
            dispatch(setInitialValue(item.location))  
        }}
        >
            <Icon
                name={item.icon}
                type="ionicon"
                color="white"
                size={18}
                style={{marginRight: 10, backgroundColor: 'gray', padding: 5, borderRadius: 50}}
            />
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.location}</Text>
                <Text style={{color: 'gray'}}>{item.destination}</Text>
            </View>
            
            
        </TouchableOpacity>
    )}
/>
  )
}

export default NavFavorite

