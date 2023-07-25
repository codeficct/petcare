import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const Pets = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Mascotas</Text>
        <View style={styles.plus}>
          <Pressable
            android_ripple={{
              color: '#9391ff55',
              foreground: true
            }}
            onPress={() => navigation.navigate('AddPet')}
            style={styles.btnPlus}
          >
            <Icon name='plus' size={22} color='#fff' />
          </Pressable>
        </View>
      </View>
      <View style={styles.pets}>
        <ScrollView horizontal contentContainerStyle={{ gap: 20, paddingBottom: 20, paddingLeft: 20 }}>
          <View style={styles.pet}>
            <Image style={styles.photo} source={{ uri: 'https://images.dog.ceo/breeds/malinois/n02105162_909.jpg' }} />
            <View style={styles.leyend}>
              <Text style={styles.name}>Morphy</Text>
              <Icon name='venus' size={20} color='#f4f' style={styles.icon} />
            </View>
            <Text style={styles.year}>2 year, 3 meses</Text>
          </View>

          <View style={styles.pet}>
            <Image style={styles.photo} source={{ uri: 'https://images.dog.ceo/breeds/malinois/n02105162_909.jpg' }} />
            <View style={styles.leyend}>
              <Text style={styles.name}>Morphy</Text>
              <Icon name='mars' size={20} color='#09f' style={styles.icon} />
            </View>
            <Text style={styles.year}>2 year, 3 meses</Text>
          </View>

          <View style={styles.pet}>
            <Image style={styles.photo} source={{ uri: 'https://images.dog.ceo/breeds/malinois/n02105162_909.jpg' }} />
            <View style={styles.leyend}>
              <Text style={styles.name}>Morphy</Text>
              <Icon name='mars' size={20} color='#09f' style={styles.icon} />
            </View>
            <Text style={styles.year}>2 años, 3 meses</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Pets

const styles = StyleSheet.create({
  contain: {
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2d2a47'
  },
  plus: {
    borderRadius: 50,
    overflow: 'hidden'
  },
  btnPlus: {
    backgroundColor: '#9391ff',
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  icon: {
  },
  pets: {
  },
  pet: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 24,
    shadowColor: '#9391ffaa',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8
  },
  photo: {
    width: 200,
    height: 240,
    borderRadius: 20
  },
  leyend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  name: {
    fontSize: 20,
    color: '#2d2a47'
  },
  year: {
    color: '#868db2',
    paddingHorizontal: 10,
    paddingBottom: 10
  }
})
