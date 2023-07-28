import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, EXPO_CLIENT_ID } from '@env'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { INITIAL_STATE } from '../context/authContext'
import { storageAuth } from '../config/constants'
import { getUserByEmail } from '../../services/user'
import { useNavigation } from '@react-navigation/native'

WebBrowser.maybeCompleteAuthSession()

export const auth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID
  }, {
    projectNameForProxy: '@sauterdev/petcare',
    scheme: 'petcare'
  })

  const navigation = useNavigation()

  const { handleGoogleAuthentication, googleAuth } = useAuth()
  const { token, email } = googleAuth
  const [message, setMessage] = useState('')

  const fetchUserInfo = async (token) => {
    if (token) {
      const res = await AuthSession.fetchUserInfoAsync({ accessToken: token }, Google.discovery)
      if (res) {
        return handleGoogleAuthentication({
          email: res.email,
          name: res.name,
          photo: res.picture,
          token,
          status: 'authenticated',
          role: '',
          signIn: false,
          id: ''
        })
      }
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response
      fetchUserInfo(authentication?.accessToken)
    }
  }, [response])

  let cleanup = true
  useEffect(() => {
    if (cleanup) {
      if (token !== '') {
        getUserByEmail(email)
          .then(res => {
            if (!res || !res._id) {
              setMessage('sig up')
            } else {
              handleGoogleAuthentication({
                email: res.email,
                name: res.name,
                photo: res.photo,
                token,
                status: 'authenticated',
                role: res.role,
                signIn: true,
                id: res._id
              })
              setMessage('sig in')
            }
          })
          .catch(err => console.log(err.message))
      }
    }
    return () => {
      cleanup = false
    }
  }, [token])

  const signOut = async () => {
    await AuthSession.revokeAsync(
      {
        token: token !== '' ? token : response?.authentication?.accessToken,
        clientId: EXPO_CLIENT_ID
      },
      Google.discovery
    )
    AsyncStorage.setItem(storageAuth, JSON.stringify(INITIAL_STATE))
    handleGoogleAuthentication(INITIAL_STATE)
    navigation.navigate('Login')
  }

  return {
    promptAsync,
    request,
    signOut,
    message
  }
}
