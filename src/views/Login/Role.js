import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Role = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Pressable android_ripple={{ color: '#baf3e2' }} style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={require('../../assets/vet.png')} style={styles.imgCard} />
          <Text style={styles.text}>Veterinaria</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        <Pressable android_ripple={{ color: '#b9f4e2' }} style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={require('../../assets/user.png')} style={styles.imgCard} />
          <Text style={styles.text}>Usuario</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Role

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    gap: 20
  },
  imgCard: {
    aspectRatio: 1,
    resizeMode: 'contain',
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  card: {
    flex: 1,
    height: '80%',
    width: '100%',
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff'
  }
})
