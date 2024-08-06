// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaMW66k8k-29KjugxcWH4JcCqxVVyyKc",
  authDomain: "pickme-clone-1ba01.firebaseapp.com",
  projectId: "pickme-clone-1ba01",
  storageBucket: "pickme-clone-1ba01.appspot.com",
  messagingSenderId: "876392416788",
  appId: "1:876392416788:web:c7dba5fc75dae149600901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
const analytics = getAnalytics(app);