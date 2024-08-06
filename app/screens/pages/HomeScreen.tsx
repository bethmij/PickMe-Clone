import { Href, router } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GooglePlacesField from '../components/GooglePlacesField';
import { Icon } from 'react-native-elements';

const serviceData = [
    { name: 'Rides', icon: require('../../../assets/Home/car.png'), screen: 'screens/pages/LocationView' as Href<string | object> },
    { name: 'Food', icon: require('../../../assets/Home/food.png')},
    { name: 'Market', icon: require('../../../assets/Home/market.png')},
    { name: 'Rentals', icon: require('../../../assets/Home/rental.png')},
    { name: 'Flash', icon: require('../../../assets/Home/flash.png'), tag: 'Delivery' },
    { name: 'Trucks', icon: require('../../../assets/Home/truck.png')},
];

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-yellow-200">
            <View className="flex flex-row py-10 px-5 gap-x-5 align-middle w-full">
                <Image source={require('@/assets/pickme_logo.png')} style={{ width: 50, height: 50 }} />
                <Text className="text-xl text-gray-700 font-bold self-center">Good Morning, Bethmi</Text>
            </View>
             <KeyboardAvoidingView
                    {...(Platform.OS === 'ios' && { behavior: 'padding' })}  
                    style={{ flex: 1 }}
                >
                <ScrollView className="flex-1 bg-yellow-50 p-2 rounded-t-3xl" contentContainerStyle={{ paddingBottom: 100 }}>
                    
                    <View className="flex-row flex-wrap justify-center gap-x-3 py-2">
                        {serviceData.map((service, index) => (
                            <TouchableOpacity key={index} className="w-28 h-24 bg-yellow-100 rounded-lg items-center justify-center m-1"
                            onPress={() => {
                                if (service.screen) {
                                    router.push(service.screen);
                                }
                            }}
                            >
                                {service.tag && (
                                    <Text className="text-xs bg-red-500 text-white px-1 rounded-full absolute top-1 left-1">
                                        {service.tag}
                                    </Text>
                                )}
                                <Image source={service.icon} className="w-20 h-16 mb-1" resizeMode="contain" />
                                <Text className="text-m">{service.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    
                    <View className="px-4 py-2">
                        <Image
                            source={require('../../../assets/Home/ad1.jpeg')}
                            className="w-full h-48 rounded-t-xl"
                            resizeMode="stretch"
                        />
                        <View className="bg-yellow-50 p-2 rounded-b-xl mb-10">
                            <Text className="mt-2 text-xl font-semibold">PickMe Food, now Delivering Happiness!</Text>
                            <Text className="text-gray-600 text-sm mt-2">
                                Bringing the joy of Food and Happiness to you in the form of your most favourite dishes
                            </Text>
                            <TouchableOpacity className="bg-yellow-500 py-2 px-4 rounded-full mt-2 self-end">
                                <Text className="text-white font-bold text-lg">Check</Text>
                            </TouchableOpacity>
                        </View>

                        <Image
                            source={require('../../../assets/Home/ad2.jpeg')}
                            className="w-full h-48 rounded-t-xl"
                            resizeMode="stretch"
                        />
                        <View className="bg-yellow-50 p-2 rounded-b-xl mb-4">
                            <Text className="mt-2 text-xl font-semibold">Unlimited FREE Delivery from PickMe</Text>
                            <Text className="text-gray-600 text-sm mt-2">
                                Enjoy the convenience of FREE Food & Market delivery for Rs. 549. Get your free trial today!
                            </Text>
                            <TouchableOpacity className="bg-yellow-500 py-2 px-4 rounded-full mt-2 self-end">
                                <Text className="text-white font-bold text-lg">Check</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            
                <View className="flex-row justify-around bg-white py-4">
                    {[
                        { name: 'Home', icon: { type: 'ionicon', name: 'home-outline', color: '#FFD700' } },
                        { name: 'Activities', icon: { type: 'ionicon', name: 'list-outline', color: '#CDCDCD' } },
                        { name: 'Notifications', icon: { type: 'ionicon', name: 'notifications-outline', color: '#CDCDCD' } },
                        { name: 'Profile', icon: { type: 'ionicon', name: 'person-outline', color: '#CDCDCD' } },
                    ].map((item, index) => (
                        <TouchableOpacity key={index} className="items-center">
                            <Icon
                                type={item.icon.type}
                                name={item.icon.name}
                                color={item.name === 'Home' ? item.icon.color : '#CDCDCD'}
                                size={24}
                            />
                            <Text className={`text-xs mt-1 ${item.name === 'Home' ? 'text-yellow-500' : 'text-gray-600'}`}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
