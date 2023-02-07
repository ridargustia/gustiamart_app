// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBeK6AgOLBlVw5GmvxIDP2X1a1CbkfeZdU',
  authDomain: 'gustiamart-app.firebaseapp.com',
  projectId: 'gustiamart-app',
  storageBucket: 'gustiamart-app.appspot.com',
  messagingSenderId: '203475016290',
  appId: '1:203475016290:web:de7325c4cc0da74554cf3b',
  measurementId: 'G-NL6M7624ST',
};

// Initialize Firebase
const appFirebaseConfig = initializeApp(firebaseConfig);

export const database = getDatabase(appFirebaseConfig);

export default appFirebaseConfig;