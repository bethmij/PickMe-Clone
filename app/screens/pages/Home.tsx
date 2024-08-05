import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList, Dimensions } from 'react-native'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from '@/store'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Href, router } from 'expo-router';
// import { GOOGLE_MAP_KEY } from '@env';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { setOrigin, setDestination, selectOrigin } from '@/slices/navSlice'



const data = [
  {
    id: 1,
    title: 'Rides',
    image : require('@/assets/car.png'),
    screen:'screens/pages/MapScreen' as Href<string | object>
  },
  {
    id: 2,
    title: 'Food',
    image : require('@/assets/fast-food.png'),
    screen:'screens/pages/MapScreen' as Href<string | object>
  },
]


const Home = () => {

  const { width, height } = Dimensions.get('window');
  const dispatch = useDispatch()
  const origin = useSelector(selectOrigin);
  
  return (
    
      <SafeAreaProvider>
          <SafeAreaView className='flex-1  bg-yellow-400'>
            <View className='flex flex-row py-10 px-5 gap-x-5 align-middle w-full'>
              <Image source={require('@/assets/pickme_logo.png')} style={{width: 50, height: 50}} />         
              <Text className='text-xl text-gray-700 font-bold self-center'>Good Morining, Bethmi </Text>
            </View>
            <View className='flex flex-col h-screen bg-yellow-50 p-5  rounded-t-3xl'>             

            {/* <GooglePlacesAutocomplete
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
                      dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                      }));
                    }
                    dispatch(setDestination(null));
                  }}
                   
                  enablePoweredByContainer={false}                
                  fetchDetails={true}
                  minLength={2}
                  query={{
                    key:GOOGLE_MAP_KEY,
                    language: 'en', 
                  }}
                  nearbyPlacesAPI='GooglePlacesSearch'
                  // debounce={100}            
                />               */}
                

                <FlatList 
                data={data}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity className='px-5 bg-yellow-100 rounded-3xl m-2 w-40 h-40'  
                      onPress={()=>{router.push(item.screen)}} disabled={!origin}>   
                    <View>              
                      <Image source={item.image} style={{width: 120, height: 120, resizeMode:'contain'} } />
                      <Text className='text-xl text-gray-600 font-bold text-center'>{item.title}</Text>   
                    </View>                  
                  </TouchableOpacity>
                )}
              />

                       
              
            </View>
            
          </SafeAreaView>
        </SafeAreaProvider>
    
  )
}

export default Home


