// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'cloud-storage-38b29.firebaseapp.com',
  projectId: 'cloud-storage-38b29',
  storageBucket: 'cloud-storage-38b29.appspot.com',
  messagingSenderId: '289356711473',
  appId: '1:289356711473:web:773cc00b94f67f2c64f710',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
