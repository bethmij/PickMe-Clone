import { store } from "@/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="screens/pages/Home"  options={{ headerShown: false }}/>
        <Stack.Screen name="screens/pages/MapScreen"  options={{ headerShown: false }}/>
      </Stack>
    </Provider>
    
  );
}
