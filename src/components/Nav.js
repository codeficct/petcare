import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Nav = () => {
  return (
    <View style={styles.nav}>
      <View style={{ borderRadius: 15, overflow: 'hidden' }}>
        <Pressable
          android_ripple={{
            color: '#8a81ff55',
            foreground: true
          }}
          style={{ padding: 10 }}
        >
          <View style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: '#8a81ff' }]}>
              <Icon name='syringe' size={24} color='#fff' />
            </View>
            <Text style={styles.navText}>Vacunas</Text>
          </View>
        </Pressable>
      </View>

      <View style={{ borderRadius: 15, overflow: 'hidden' }}>
        <Pressable
          android_ripple={{
            color: '#ffa06a55',
            foreground: true
          }}
          style={{ padding: 10 }}
        >
          <View style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: '#ffa06a' }]}>
              <Icon name='paw' size={24} color='#fff' />
            </View>
            <Text style={styles.navText}>Mascotas</Text>
          </View>
        </Pressable>
      </View>

      <View style={{ borderRadius: 15, overflow: 'hidden' }}>
        <Pressable
          android_ripple={{
            color: '#ffb6b355',
            foreground: true
          }}
          style={{ padding: 10 }}
        >
          <View style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: '#ffb6b3' }]}>
              <Icon name='fish' size={24} color='#fff' />
            </View>
            <Text style={styles.navText}>Nutrición</Text>
          </View>
        </Pressable>
      </View>

      <View style={{ borderRadius: 15, overflow: 'hidden' }}>
        <Pressable
          android_ripple={{
            color: '#1fc28b55',
            foreground: true
          }}
          style={{ padding: 10 }}
        >
          <View style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: '#1fc28b' }]}>
              <Icon name='shopping-cart' size={24} color='#fff' />
            </View>
            <Text style={styles.navText}>Compras</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({
  nav: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20
  },
  navItem: {
    alignItems: 'center',
    gap: 10
  },
  navIcon: {
    padding: 15,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  navText: {
    fontSize: 14,
    color: '#2d2a45'
  }
})
