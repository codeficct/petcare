import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../../auth/google'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useAuth } from '../../hooks/useAuth'
import { getUserById } from '../../../services/user'

const ModalUser = () => {
  const { signOut } = auth()
  const { googleAuth } = useAuth()
  const [user, setUser] = useState([])

  useEffect(() => {
    getUserById(googleAuth.id)
      .then(res => {
        setUser(res)
      }).catch(err => console.log(err))

    return () => {
    }
  }, [])

  return (
    <View>
      {/* <StatusBar backgroundColor='#f5faf6' barStyle='dark-content' /> */}
      <ScrollView contentContainerStyle={{ gap: 10, paddingHorizontal: 20, alignItems: 'center' }}>
        <View style={styles.addPhoto}>
          <Image style={styles.img} source={{ uri: user.photo }} />
        </View>
        <Text style={styles.label}><Icon name='paw' size={20} color='#8e94b6' />     Nombre</Text>
        <Text style={styles.text}>{user.name}</Text>
        <Text style={styles.label}><Icon name='calendar' size={20} color='#8e94b6' />     Role</Text>
        <Text style={styles.text}>{user.role === 'vet' ? 'Veterinaria' : 'Usuario'}</Text>
        <Text style={styles.label}><Icon name='at' size={20} color='#8e94b6' />     Email</Text>
        <Text style={styles.text}>{user.email}</Text>
        <View style={styles.button}>
          <Pressable
            android_ripple={{ color: '#bfafff', borderless: true }}
            style={styles.btn}
            onPress={() => signOut()}
          >
            <Text style={styles.btnText}>Cerrar sesión</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

export default ModalUser

const styles = StyleSheet.create({
  addPhoto: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    marginVertical: 40,
    overflow: 'hidden'
  },
  img: {
    width: 170,
    height: 170
    // resizeMode: 'contain'
  },
  icon: {
    // transform: [{ translateY: -30 }],
    alignContent: 'center',
    right: 4,
    bottom: 15,
    textAlign: 'right',
    position: 'absolute',
    backgroundColor: '#f7f9fc',
    padding: 10,
    borderRadius: 50
  },
  label: {
    color: '#8e94b6',
    fontSize: 18
  },
  text: {
    fontSize: 20,
    color: '#2d2a45',
    fontWeight: '500',
    paddingBottom: 10
  },
  textInput: {
    backgroundColor: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10
  },
  date: {
    flexDirection: 'row',
    gap: 20
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
    flexShrink: 1,
    marginVertical: 20
  },
  btn: {
    paddingVertical: 15,
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  btnText: {
    fontSize: 20,
    color: '#fff'
  }
})
