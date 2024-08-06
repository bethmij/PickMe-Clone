import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaMW66k8k-29KjugxcWH4JcCqxVVyyKc",
  authDomain: "pickme-clone-1ba01.firebaseapp.com",
  projectId: "pickme-clone-1ba01",
  storageBucket: "pickme-clone-1ba01.appspot.com",
  messagingSenderId: "876392416788",
  appId: "1:876392416788:web:c7dba5fc75dae149600901"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Storage
export const storage = getStorage(app);
