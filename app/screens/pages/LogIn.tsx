import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
// import { auth } from "../../../firebase"; 
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const LogIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {  
    router.push('/screens/pages/HomeScreen');
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     router.push('/screens/pages/HomeScreen');
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert("Login Failed")
    //   });
  };



  const handleSignUp = () => {
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     Alert.alert('Sign Up Success', 'User registered successfully');
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     alert(errorMessage);
    //   });
  };

  return (
    <LinearGradient
      colors={['#F1C70A', '#F1960A']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center items-center"
    >
      <View className="rounded-lg p-5 shadow-lg w-[90vw] h-[55vh] z-10">
        <View className="absolute bg-white bg-opacity-80 w-[90vw] h-full opacity-25 rounded-lg"></View>
        <View className='flex flex-row justify-center gap-x-5 items-center mb-8'>
          <Image
            source={require("../../../assets/pickme_logo.png")}
            style={{ width: 60, height: 60 }}
            resizeMode="stretch"
          />   
          <Image
            source={require("../../../assets/pickMe-preview.png")}
            style={{ width: 200, height: 60 }}
            resizeMode="stretch"
          />            
        </View>
        
        <TextInput
          className="h-12 border border-gray-700 rounded mb-4 px-3 bg-transparent"
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
        
        <Text className="text-center my-4 text-orange-800 text-sm">OR</Text>
        <View className="flex flex-col space-y-3">
          <View>
            <Button title="Sign Up" onPress={handleSignUp} color="#D08211" />
          </View>
        </View>
      </View>
      <Image
        source={require("../../../assets/building.png")}
        style={{ width: '100%', height: 400 }}
        resizeMode="stretch"
        className="self-center absolute w-full bottom-0 z-0"
      />
    </LinearGradient>
  );
};

export default LogIn;
