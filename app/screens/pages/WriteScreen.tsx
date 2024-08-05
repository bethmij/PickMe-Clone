import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import Layout from '../common/Layout';

const WriteScreen = () => {
  return (
    <Layout>
        <View className="flex-1 bg-black">
        <ScrollView className="flex-1 px-4 pt-5">
            <View className="flex-row justify-between items-center mt-4">
            <Text className="text-white text-2xl font-bold">Write</Text>
            <Image
                source={require('../../../assets/profile-logo.jpg')}
                className="w-10 h-10 rounded-full"
            />
            </View>
            <View className="bg-[#1A1919] mt-4 p-6 rounded-lg flex-row items-center">
            <Image
                source={require('../../../assets/profile.jpg')}
                className="w-20 h-20 rounded-lg"
            />
            <View className="ml-4 ">
                <Text className="text-white text-lg">Continue writing</Text>
                <Text  className="text-white  w-52 font-bold text-m">Default Title - Write Your Own</Text>
                <View className="flex-row mt-2">
                <Text className="text-gray-400">0 published parts</Text>
                <Text className="text-gray-400 ml-2">1 draft</Text>
                </View>
            </View>
            </View>
            <View className="mt-10">
            <TouchableOpacity className="flex-row items-center mt-4 pb-5 border-b border-gray-700">
                <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="white" />
                <Text className="text-white ml-2 text-lg">Edit another story</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center mt-4 pb-5 border-b border-gray-700">
                <Entypo name="new-message" size={24} color="white" />
                <Text className="text-white ml-2 text-lg">Create a new story</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center mt-4 pb-5 border-b border-gray-700">
                <Ionicons name="book-outline" size={24} color="white" />
                <Text className="text-white ml-2 text-lg">Helpful writer resources</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center mt-4">
                <FontAwesome name="star-o" size={24} color="white" />
                <Text className="text-white ml-2 text-lg">Wattpad programs & opportunities</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    </Layout>
  );
};

export default WriteScreen;
