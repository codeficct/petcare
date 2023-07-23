import { Image, View, StyleSheet, Text, Pressable, StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as NavigationBar from 'expo-navigation-bar'
import { useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, EXPO_CLIENT_ID } from '@env'
import { makeRedirectUri } from 'expo-auth-session'
import { useNavigation } from '@react-navigation/native'
// import { useAuth } from '../../hooks/useAuth'

WebBrowser.maybeCompleteAuthSession()

const storageLight = async () => {
  try {
    NavigationBar.setBackgroundColorAsync('#F5FDFF')
    NavigationBar.setButtonStyleAsync('dark')
  } catch (e) {
    console.error(e)
  }
}

const EXPO_REDIRECT_PARAMS = {
  // useProxy: false,
  // projectNameForProxy: '@sauterdev/petcare',
  scheme: 'com.sauter.petcare',
  path: 'auth.expo.io'
}
const NATIVE_REDIRECT_PARAMS = { native: 'petcare://' }
// const REDIRECT_PARAMS = Constants.appOwnership === 'expo' ? EXPO_REDIRECT_PARAMS : NATIVE_REDIRECT_PARAMS
const redirectUri = makeRedirectUri(EXPO_REDIRECT_PARAMS)

const Login = () => {
  const [userInfo, setUserInfo] = useState()
  const navigation = useNavigation()
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID
    // redirectUri
  }, { projectNameForProxy: '@sauterdev/petcare' })
  // const { googleAuth, signInWithGoogle } = useAuth()
  useEffect(() => {
    storageLight()
    return () => {
    }
  }, [])

  useEffect(() => {
    console.log({ response })
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      console.log(response, ' Luis, response')
      signInWithCredential(auth, credential)
      // fetchUserInfo(authentication?.accessToken)
    }
    return () => {

    }
  }, [response])

  return (
    // <AuthProvider>
    <SafeAreaView style={[styles.safeArea]}>
      <StatusBar backgroundColor='#2d2a47' barStyle='light-content' />
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/logo3.png')} style={styles.img} />
      </View>
      <View style={styles.cardButton}>
        <ScrollView contentContainerStyle={{ gap: 40 }}>
          <View>
            <Text style={styles.title1}>Bienvenido a Pet Care</Text>
            <Text style={styles.title2}>Cuidado de Mascotas</Text>
            <Text style={styles.subTitle}>¡Inicia sesión y comienza a cuidar a tus mascotas!</Text>
          </View>
          <View style={styles.button}>
            <Pressable
              android_ripple={{ color: '#b9f4e2', borderless: true }}
              style={styles.btn}
              onPress={() => {
                navigation.navigate('Role')
                // promptAsync(EXPO_REDIRECT_PARAMS)
                // googleAuth.status === 'unauthenticated' && signInWithGoogle()
              }}
            >
              <Image source={require('../../assets/google.png')} style={styles.btnImg} />
              <Text style={styles.btnText}>Iniciar sesión con Google</Text>
            </Pressable>
          </View>
          <View style={styles.footer}>
            <Text style={{ color: '#b6b6b6', fontSize: 16, textAlign: 'center' }}>Pet Care, una iniciativa de</Text>
            <Text style={{ color: '#b6b6b6', fontSize: 16, textAlign: 'center' }}>Luis, Helen, Ilse, Andres y Junior</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
    // </AuthProvider>
  )
}

export default Login

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#2d2a47'
  },
  imgContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'contain',
    width: '70%',
    height: '70%',
    alignSelf: 'center'

  },
  cardButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    gap: 20
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2d2a47'
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FE9901'
  },
  subTitle: {
    fontSize: 20,
    color: '#8a8a8a',
    marginTop: 20
  },
  button: {
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000a',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    flexShrink: 1
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    overflow: 'hidden',
    flexShrink: 1,
    alignItems: 'center',
    gap: 20,
    width: '100%',
    justifyContent: 'center'
  },
  btnImg: {
    aspectRatio: 1,
    resizeMode: 'contain',
    width: 28,
    height: 28
  },
  btnText: {
    fontSize: 20,
    color: '#222'
  },
  footer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    height: 100
    // flexShrink: 1
  }
})
