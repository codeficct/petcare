import { Pressable, StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../hooks/useAuth'
import { authGoogle } from '../../../services/user'

const Role = () => {
  const [isUser, setIsUser] = useState(true)
  const { googleAuth, handleGoogleAuthentication } = useAuth()
  const { email, name, photo, token } = googleAuth
  const navigation = useNavigation()

  const handleLogin = () => {
    authGoogle({
      email,
      name,
      photo,
      role: isUser ? 'user' : 'vet'
    })
      .then(({ data }) => {
        handleGoogleAuthentication({
          email: data.email,
          name: data.name,
          photo: data.photo,
          token,
          status: 'authenticated',
          role: data.role,
          signIn: true
        })
      }
      ).catch(err => console.log(err))
      .finally(() => {
        // navigation.navigate('Home')
      })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor='#f5faf6' barStyle='dark-content' />
      <Text style={{ paddingLeft: 40, marginBottom: 30, fontSize: 30, color: '#2d2a47', fontWeight: '500' }}>Creando cuenta</Text>
      <View style={styles.user}>
        <View style={styles.text}>
          <Text style={[styles.name, { fontWeight: '700' }]}>{name}</Text>
          <Text style={[styles.name, { color: '#ebe4ff' }]}>{email}</Text>
        </View>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>

      {/* <Text style={styles.title}>¿Que tipo de usuario eres?</Text> */}
      <Text style={styles.title}>Selecciona el tipo de cuenta a crear</Text>

      <View View style={styles.cardContainer}>
        <View style={[styles.card, { borderColor: !isUser ? '#8a81ff' : 'transparent' }]}>
          <Pressable
            onPress={() => {
              setIsUser(false)
            }}
            android_ripple={{ color: '#9391ff' }} style={{ flex: 1, justifyContent: 'center' }}
          >
            <Image source={require('../../assets/vet.png')} style={styles.imgCard} />
            <Text style={styles.role}>Veterinaria</Text>
          </Pressable>
        </View>
        <View style={[styles.card, { borderColor: isUser ? '#8a81ff' : 'transparent' }]}>
          <Pressable
            onPress={() => {
              setIsUser(true)
            }}
            android_ripple={{ color: '#9391ff' }} style={{ flex: 1, justifyContent: 'center' }}
          >
            <Image source={require('../../assets/user.png')} style={styles.imgCard} />
            <Text style={styles.role}>Usuario</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.button}>
        <Pressable
          android_ripple={{ color: '#bfafff', borderless: true }}
          style={styles.btn}
          onPress={() => handleLogin()}
        >
          <Text style={styles.btnText}>Empezar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Role

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#f5faf6'
  },
  user: {
    flexDirection: 'row',
    gap: 20,
    // width: '80%',
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#8a81ff',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 24,
    marginTop: 20
  },
  text: {
    flexDirection: 'column'
  },
  name: {
    color: '#fff',
    fontSize: 18
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    paddingHorizontal: 20,
    color: '#8d93b5',
    textAlign: 'center'
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    gap: 20
  },
  imgCard: {
    aspectRatio: 1,
    resizeMode: 'contain',
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  card: {
    flex: 1,
    height: 220,
    width: '100%',
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 40,
    borderWidth: 4
  },
  role: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  button: {
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    // width: '80%',
    alignSelf: 'center',
    overflow: 'hidden',
    shadowColor: '#000a',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    marginHorizontal: 4,
    backgroundColor: '#8a81ff',
    flexShrink: 1
  },
  btn: {
    paddingVertical: 15,
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  btnText: {
    fontSize: 24,
    color: '#fff'
  }
})
