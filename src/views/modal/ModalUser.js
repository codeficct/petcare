import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../auth/google'

const ModalUser = () => {
  const { signOut } = auth()
  return (
    <View>
      {/* <StatusBar backgroundColor='#f5faf6' barStyle='dark-content' /> */}
      <Text>ModalUser</Text>
      <View style={styles.button}>
        <Pressable
          android_ripple={{ color: '#bfafff', borderless: true }}
          style={styles.btn}
          onPress={() => signOut()}
        >
          <Text style={styles.btnText}>Cerrar sesión</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ModalUser

const styles = StyleSheet.create({
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
