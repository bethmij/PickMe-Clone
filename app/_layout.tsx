import { store } from "@/store";
import { Stack } from "expo-router";
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <Stack>
            <Stack.Screen name="index"  options={{ headerShown: false }} />
            
          </Stack>
        </Provider>
      </PaperProvider>  
    </SafeAreaProvider>
  );
}
