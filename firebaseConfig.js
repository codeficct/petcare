import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD-7dzZbGz3DICq6QjMXvVMLwGobMR4eJk',
  authDomain: 'petcare-7a7c6.firebaseapp.com',
  projectId: 'petcare-7a7c6',
  storageBucket: 'petcare-7a7c6.appspot.com',
  messagingSenderId: '614772219166',
  appId: '1:614772219166:web:1648e1649f5eee0b777d0f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
