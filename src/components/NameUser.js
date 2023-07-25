import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NameUser = ({ name, photo }) => {
  return (
    <View style={styles.user}>
      <Text style={styles.name}>Pet Care</Text>
      {/* <Text style={styles.name}>{name}</Text> */}
      <Image style={styles.photo} source={{ uri: photo }} />
    </View>
  )
}

export default NameUser

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-end',
    width: '90%',
    backgroundColor: '#f22',
    justifyContent: 'space-between',
    gap: 14
  },
  name: {
    fontSize: 18
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 50
  }
})
