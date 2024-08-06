import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import { Href, router } from 'expo-router'

const loginUrl = "/screens/pages/LogIn" as Href<string | object>;

const MainView = () => {
    
  return (
    <View className="flex-1 bg-white">
      <View className="h-screen relative">
        <View className="h-1/2 bg-red-500 absolute top-0 w-full">
          <ImageBackground
            source={require("../../../assets/frontImg.jpg")}
            style={{ flex: 1 }}
            resizeMode="stretch"
          />
        </View>
        <View className="h-1/2 flex  flex-col pt-10 bg-white rounded-t-3xl absolute bottom-0 w-full mb-10" style={{ marginTop: -50 }}>
        <Image className='w-full self-center'
            source={require("../../../assets/pickMe-preview.png")}
            style={{width:200, height:60}}
            resizeMode="stretch"
          />
          <Text className="w-full self-center text-center mt-20 text-[8vw] font-bold px-10"
            style={{ letterSpacing: 1 }} 
            >
            Joyful mobility for a better life
            </Text>
            <View className='w-full self-center'>
                <Button
                title={"Get Started"}
                titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'black', paddingVertical: 8, }}  
                ViewComponent={LinearGradient} 
                linearGradientProps={{
                    colors: ["#DFD90D", "#ECCB13"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}            
                buttonStyle={{
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 30,
                    backgroundColor: '#ECCB13',
                }}
                containerStyle={{
                    width: 200,                    
                    marginTop: 100,
                    alignSelf: 'center',
                }}
                icon={{
                    name: 'arrow-right',
                    type: 'font-awesome',
                    size: 15,
                    color: 'black',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
                onPress={()=>{router.push(loginUrl)}}
                />
            </View>
        </View>
      </View>
    </View>
  )
}

export default MainView

const styles = StyleSheet.create({})