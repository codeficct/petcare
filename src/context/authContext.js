import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { storageAuth } from '../config/constants'

export const AuthContext = createContext({})

export const INITIAL_STATE = {
  email: '',
  name: '',
  photo: '',
  status: 'unauthenticated',
  token: '',
  role: '',
  signIn: false,
  id: ''
}

let authObjectStorage
const getAuthData = async () => {
  const jsonValue = await AsyncStorage.getItem(storageAuth)
  return jsonValue !== null ? JSON.parse(jsonValue) : INITIAL_STATE
}
getAuthData().then((res) => (authObjectStorage = res))

export const AuthStateProvider = ({ children }) => {
  const [googleAuth, setGoogleAuth] = useState(authObjectStorage)
  const [photoPet, setPhotoPet] = useState('https://i.ibb.co/ChZjHZc/storage-emulated-0-Android-data-com-miui-gallery-cache-Security-Share-1690433303755.png')
  // 2948 6804
  const handleGoogleAuthentication = async ({ email, name, photo, status, token, role, signIn, id }) => {
    const newAuthGoogle = { email, name, photo, status, token, role, signIn, id }
    const jsonValue = JSON.stringify(newAuthGoogle)
    setGoogleAuth(newAuthGoogle)
    await AsyncStorage.setItem(storageAuth, jsonValue)
  }

  const handlePhotoPet = (img) => setPhotoPet(img)

  return (
    <AuthContext.Provider value={{ googleAuth, handleGoogleAuthentication, handlePhotoPet, photoPet }}>
      {children}
    </AuthContext.Provider>
  )
}
