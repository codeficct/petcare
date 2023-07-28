import { Image, View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../auth/google'

const Login = () => {
  const navigation = useNavigation()
  const { promptAsync, message } = auth()

  const handleLogin = async () => {
    await promptAsync({
      projectNameForProxy: '@sauterdev/petcare',
      proxyOptions: {
        scheme: 'petcare'
      }
    })
  }

  useEffect(() => {
    if (message === 'sig up') {
      navigation.navigate('Role')
    }

    return () => {
    }
  }, [message])

  return (
    // <AuthProvider>
    <SafeAreaView style={[styles.safeArea]}>
      {/* <StatusBar backgroundColor='#2d2a47' barStyle='light-content' /> */}
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
              onPress={() => handleLogin()}
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
    backgroundColor: '#2d2a47',
    paddingVertical: 0
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
    backgroundColor: '#fefefb',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    gap: 20,
    marginBottom: -20
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
