import React, { ReactNode } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <View className="flex-1">{children}</View>
      <SafeAreaView className="absolute bottom-0 w-full flex-row items-center justify-around p-4 bg-black">
        <TouchableOpacity onPress={() => router.push('screens/pages/Dashboard')}>
          <Ionicons name="home-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('screens/pages/Search')}>
          <Ionicons name="search-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('screens/pages/Library')}>
          <Ionicons name="library-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('screens/pages/WriteScreen')}>
          <Ionicons name="pencil-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('screens/pages/UpdateScreen')}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Layout;
