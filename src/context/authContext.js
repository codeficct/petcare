import React, { createContext, useEffect, useState, useCallback, useMemo } from 'react'
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
// import auth from '@react-native-firebase/auth'
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
  signIn: false
}

let authObjectStorage
const getAuthData = async () => {
  const jsonValue = await AsyncStorage.getItem(storageAuth)
  return jsonValue !== null ? JSON.parse(jsonValue) : INITIAL_STATE
}
getAuthData().then((res) => (authObjectStorage = res))

export const AuthStateProvider = ({ children }) => {
  const [googleAuth, setGoogleAuth] = useState(authObjectStorage)
  // 2948 6804
  const handleGoogleAuthentication = async ({ email, name, photo, status, token, role, signIn }) => {
    const newAuthGoogle = { email, name, photo, status, token, role, signIn }
    const jsonValue = JSON.stringify(newAuthGoogle)
    setGoogleAuth(newAuthGoogle)
    await AsyncStorage.setItem(storageAuth, jsonValue)
  }
  return (
    <AuthContext.Provider value={{ googleAuth, handleGoogleAuthentication }}>
      {children}
    </AuthContext.Provider>
  )
}
