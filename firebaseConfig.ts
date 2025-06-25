// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa2uj903Zp8SGKc2kTHXViCZ6noAPiq6Q",
  authDomain: "ozpath.firebaseapp.com",
  projectId: "ozpath",
  storageBucket: "ozpath.firebasestorage.app",
  messagingSenderId: "779252081955",
  appId: "1:779252081955:web:5ead48fabc5dd5899e1896",
  measurementId: "G-37NV0HWDRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});