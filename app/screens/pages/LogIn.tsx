import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, Alert, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';



const LogIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`${email}, .... ${password}`);
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Redirecting to forgot password screen');
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Redirecting to Google login');
  };

  

  return (
   
      <LinearGradient
        colors={['#F1C70A', '#F1960A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1 justify-center "
      >
        <View className="rounded-lg p-5 mx-5 shadow-lg w-[90vw] h-[50vh] z-10 ">
          <View className="  absolute bg-white bg-opacity-80 w-[90vw]  h-full opacity-25 rounded-lg "></View>
          <View className='flex flex-row justify-center gap-x-5 items-center mb-8'>
          
            <Image className='w-full self-center'
              source={require("../../../assets/pickme_logo.png")}
              style={{width:60, height:60}}
              resizeMode="stretch"
            />   
            <Image className='w-full self-center'
              source={require("../../../assets/pickMe-preview.png")}
              style={{width:200, height:60}}
              resizeMode="stretch"
            />            
          </View>
          
          <TextInput
            className="h-12 border border-gray-700  rounded mb-4 px-3 bg-transparent"
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            className="h-12 border border-gray-700 rounded mb-4 px-3 bg-transparent"
            placeholder="Password"
            placeholderTextColor="#000"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} color="#db4437" />
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-right  w-full text-orange-800 text-sm">Forgot Password?</Text>
          </TouchableOpacity>
          <Text className="text-center my-4 text-orange-800 text-lg">OR</Text>
          <View className="flex flex-col space-y-3">
            <View>
              <Button title="Sign Up" onPress={handleGoogleLogin} color="#D08211" />
            </View>
           
          </View>

        </View>
        <Image className='self-center absolute w-full bottom-0 z-0 '
              source={require("../../../assets/building.png")}
              style={{width:'100%', height:400}}
              resizeMode="stretch"
            />       
      </LinearGradient>
 
  );
};



export default LogIn;
