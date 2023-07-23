import { Pressable, StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Role = ({ email = 'sauterdevs@gmail.com', name = 'Luis Gabriel Janco', photo = 'https://lh3.googleusercontent.com/ogw/AGvuzYagkQQ02FAeCluPAB4SN9aD_NO6QsnPxh2WcxBv=s32-c-mo' }) => {
  const [isUser, setIsUser] = useState(true)
  const handleRole = (value) => setIsUser(value)
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor='#f5faf6' barStyle='dark-content' />

      <View style={styles.user}>
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>{email}</Text>
        </View>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>

      {/* <View style={styles.title}> */}
      <Text style={styles.title}>Que tipo de usuario es?</Text>
      {/* </View> */}

      <View style={styles.cardContainer}>
        <View style={[styles.card, { borderColor: !isUser ? '#1ec28b' : 'transparent' }]}>
          <Pressable
            onPress={() => {
              setIsUser(false)
            }}
            android_ripple={{ color: '#baf3e2' }} style={{ flex: 1, justifyContent: 'center' }}
          >
            <Image source={require('../../assets/vet.png')} style={styles.imgCard} />
            <Text style={styles.role}>Veterinaria</Text>
          </Pressable>
        </View>
        <View style={[styles.card, { borderColor: isUser ? '#1ec28b' : 'transparent' }]}>
          <Pressable
            onPress={() => {
              setIsUser(true)
            }}
            android_ripple={{ color: '#b9f4e2' }} style={{ flex: 1, justifyContent: 'center' }}
          >
            <Image source={require('../../assets/user.png')} style={styles.imgCard} />
            <Text style={styles.role}>Usuario</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.button}>
        <Pressable
          android_ripple={{ color: '#b9f4e2', borderless: true }}
          style={styles.btn}
          onPress={() => { }}
        >
          <Text style={styles.btnText}>Continuar</Text>
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
    width: '80%',
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#2d2a47',
    justifyContent: 'center',
    padding: 15,
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
    fontSize: 30,
    color: '#2d2a46',
    textAlign: 'center'
  },

  cardContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    gap: 20
  },
  imgCard: {
    aspectRatio: 1,
    resizeMode: 'contain',
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
  card: {
    flex: 1,
    height: 250,
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
    backgroundColor: '#1ec28b',
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
