import { store } from "@/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
      </Stack>
    </Provider>
    
  );
}
