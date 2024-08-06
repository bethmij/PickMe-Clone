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
    router.push('screens/pages/Dashboard');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Redirecting to forgot password screen');
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Redirecting to Google login');
  };

  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Redirecting to Facebook login');
  };

  return (
    <ImageBackground
      source={require('../../../assets/login.jpg' )}
      className="flex-1 justify-center"
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        className="flex-1 justify-center px-5"
      >
        <View className="rounded-lg p-5  shadow-lg w-[90vw] h-[60vh] ">
          <View className=" absolute bg-white bg-opacity-80 w-[90vw]  h-full opacity-25 rounded-lg "></View>
          <View className='flex flex-row justify-center gap-x-5 items-center mb-8'>
          <Text className="text-4xl font-bold text-orange-600 text-center shadow-md ">Wattpad</Text>
            <Image
              source={require('../../../assets/background.jpeg.png' )}
              className="w-20 h-16 "
            />            
          </View>
          
          <TextInput
            className="h-12 border border-gray-300 rounded mb-4 px-3 bg-transparent"
            placeholder="Email"
            placeholderTextColor="#ccc"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            className="h-12 border border-gray-300 rounded mb-4 px-3 bg-transparent"
            placeholder="Password"
            placeholderTextColor="#ccc"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} color="#db4437" />
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-center text-white mt-4  text-lg">Forgot Password?</Text>
          </TouchableOpacity>
          <Text className="text-center my-4 text-white text-lg">OR</Text>
          <View className="flex flex-col space-y-3">
            <View>
              <Button title="Login with Google" onPress={handleGoogleLogin} color="#f56b60" />
            </View>
            <View>
              <Button title="Login with Facebook" onPress={handleFacebookLogin} color="#3b5998" />
            </View>
          </View>

        </View>
      </LinearGradient>
    </ImageBackground>
  );
};



export default LogIn;
