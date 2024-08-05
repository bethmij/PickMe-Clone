import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon } from 'react-native-elements';
import GooglePlacesField from '../components/GooglePlacesField';
import NavFavorite from '../components/NavFavorite';
import { selectOrigin, setInitialValue } from '@/slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Href, router } from 'expo-router';

export default function RideBookingScreen() {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const dispatch = useDispatch();
  const mapUrl = "screens/pages/MapScreen" as Href<string | object>;

  

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
   
      <View className="flex-row justify-between items-center px-4 py-3 ">
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-500 py-1 px-4 rounded-full flex flex-row gap-x-3">
            <Icon name="person-outline" size={24} type="ionicon" color="#fff" />
          <Text className="text-white text-base font-semibold">For a Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-gray-600 text-base">SKIP</Text>
        </TouchableOpacity>
      </View>

      
      <View className="flex-row justify-around items-center py-2 mt-5 bg-white">
        <TouchableOpacity className="flex-row items-center ">
          <Text className="text-base font-semibold">One way</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center ml-4">
          <Text className="text-base text-center text-gray-400">Return trip</Text>
        </TouchableOpacity>
      </View>

      <View className="p-4 bg-white mt-">
        <View className="flex-row items-center  justify-between">
          <View className="flex-row items-center flex-1 gap-x-10">
            <Text className="text-blue-500 font-bold text-lg">PICKUP</Text>
            <View className="ml-2 flex-1 ">
                <GooglePlacesField type='origin'  color='#fff'/>
            </View>
          </View>
          <TouchableOpacity className="ml-2">
            <Icon name="heart"  type="ionicon" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center  justify-between mt-5">
          <View className="flex-row items-center flex-1 gap-x-14">
            <Text className="text-orange-500 font-bold text-lg">DROP</Text>
            <View className="ml-2 flex-1 ">
                <GooglePlacesField type='destination' color='#fff'/>
            </View>
          </View>
          <TouchableOpacity className="ml-2">
            <Icon name="add"  type="ionicon" size={24} color="#000" />
          </TouchableOpacity>
        </View>         
        
      </View>

    
      <View className="bg-white mt-5 flex flex-col">
        <TouchableOpacity className="flex-row items-start py-3 px-4 border-b border-gray-200" 
            onPress={()=> dispatch(setInitialValue("Your Location"))}
        >
        <Icon name="location-outline" type='ionicon' size={24} color="#000" />
            <View className='flex-col items-start'>                
                <Text className="ml-4 text-base">Set your location on map</Text>
                <Text className="ml-4 text-base text-gray-500">{origin.description}</Text>
            </View>            
            
         </TouchableOpacity>            
      </View>

      <View className="bg-white mt-5 flex flex-col">     
        <View className="flex-row items-center py-3 px-4 border-b  border-gray-200">
          <Icon name="heart-outline" type='ionicon' size={24} color="#000" />
          <Text className="ml-4 text-base">Favourites</Text>
        </View>
        <NavFavorite/>   
      </View>

      <Button title="Map" onPress={()=>{router.push(mapUrl)}}></Button>

     

      
    </SafeAreaView>
  );
}
