import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ModalPermission = ({ route }) => {
  const navigation = useNavigation()

  const handlePermission = async () => {
    await route.params.requestPermission()
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permission Not Granted {route.params.status}</Text>
      <View style={styles.button}>
        <Pressable
          android_ripple={{ color: '#bfafff', borderless: true }}
          style={styles.btn}
          onPress={() => handlePermission()}
        >
          <Text style={styles.btnText}>Solicitar Permisos</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ModalPermission

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
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
