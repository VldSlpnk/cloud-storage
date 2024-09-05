// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmi7oHl2p-LvKiy87xyjujsECmZl0AaKA',
  authDomain: 'cloud-storage-7e445.firebaseapp.com',
  projectId: 'cloud-storage-7e445',
  storageBucket: 'cloud-storage-7e445.appspot.com',
  messagingSenderId: '160322915280',
  appId: '1:160322915280:web:9100cb7afae19439d5c7d5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
