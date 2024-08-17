import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { selectTravelTimeInfo, setIsRideOptions } from '@/slices/navSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
    {
        id: 1,
        title: "Three Wheel",
        multiplier: 1,
        image: require('@/assets/three_wheel.png'),
    },
    {
        id: 2,
        title: "Mini Car",
        multiplier: 2,
        image: require('@/assets/nano_car.png'),
    },
    {
        id: 3,
        title: "Car",
        multiplier: 2.5,
        image: require('@/assets/car2.png'),
    }
];

const SURGE_CHANGE_RATE = 1.5;

const RideOptions = () => {
  const dispatch = useDispatch();  
  const [selected, setSelected] = useState<typeof data[0] | null>(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo);
  
  return (
    <SafeAreaView className="flex-1">
        <View>
            <TouchableOpacity 
                className='absolute top-3 left-5 z-50 p-3 rounded-full'
                onPress={() => dispatch(setIsRideOptions(false))}
            >
                <Icon name="chevron-left" type='fontawesome' />
            </TouchableOpacity>
            <Text className='text-center py-5 text-xl'>
                Select a ride - {travelTimeInfo?.distance?.text || 'N/A'}
            </Text>
        </View>

        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: { id, title, multiplier, image }, item }) => (
                <TouchableOpacity 
                    className={`flex flex-row justify-between items-center px-4 py-2 rounded-lg ${
                        selected?.id === id ? 'bg-gray-300' : 'bg-transparent'
                    }`}
                    onPress={() => setSelected(item)}
                >
                    <Image source={image} style={{ width: 100, height: 100, resizeMode: "contain" }} />

                    <View className='ml-6'>
                        <Text className='text-xl font-semibold'>{title}</Text>
                        <Text>{travelTimeInfo?.duration?.text || 'N/A'} Travel Time</Text>
                    </View>
                    <Text className='text-xl'>
                        {travelTimeInfo ? 
                            new Intl.NumberFormat('en-US', {
                                style: 'currency', 
                                currency: 'LKR'
                            }).format(
                                (travelTimeInfo?.distance.value * 
                                    SURGE_CHANGE_RATE *
                                    multiplier )/
                                    50
                            ) : 'N/A'
                        }
                    </Text>
                </TouchableOpacity>
            )}
        />
        <View className='mt-auto border-t border-gray-200'>
            <TouchableOpacity 
                className={`bg-black py-3 m-3 ${!selected && 'opacity-50'}`} 
                disabled={!selected}
            >
                <Text className='text-center text-white text-xl'>
                    Choose {selected?.title || 'a ride'}
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default RideOptions;
