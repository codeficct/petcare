import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
// import { useNavigation } from '@react-navigation/native'

const images = [
  { uri: 'https://i.ibb.co/ChZjHZc/storage-emulated-0-Android-data-com-miui-gallery-cache-Security-Share-1690433303755.png', id: '0' },
  { uri: 'https://i.ibb.co/PzMybxz/190233-554-422.png', id: '1' },
  { uri: 'https://i.ibb.co/pjp1Gqd/190234-493-401.png', id: '2' },
  { uri: 'https://i.ibb.co/JFWjtV0/190235-496-408.png', id: '3' },
  { uri: 'https://i.ibb.co/Ch4TShy/190237-506-414.png', id: '4' },
  { uri: 'https://i.ibb.co/fQ9QHB0/190254-500-500.png', id: '5' },
  { uri: 'https://i.ibb.co/RQ3MKZ3/190255-500-500.png', id: '6' },
  { uri: 'https://i.ibb.co/RHB3cKt/190256-500-500.png', id: '7' },
  { uri: 'https://i.ibb.co/gT6Q8yk/190278-500-500.png', id: '8' },
  { uri: 'https://i.ibb.co/x8v0CvT/190279-443-377.png', id: '9' },
  { uri: 'https://i.ibb.co/ryC51Hc/190280-523-477.png', id: '10' },
  { uri: 'https://i.ibb.co/47zX5R8/1690433303781.png', id: '11' },
  { uri: 'https://i.ibb.co/bBfb3hK/1690433303804.png', id: '12' }
]

const ModalPets = () => {
  const navigation = useNavigation()
  const { handlePhotoPet } = useAuth()

  const handleSelect = (uri) => {
    handlePhotoPet(uri)
    navigation.goBack()
  }

  return (
    <View style={styles.contain}>
      <ScrollView
        style={{
          flex: 1,
          width: '100%'
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
        horizontal={false}
      >
        {images.map(item => (
          <View key={item.id} style={styles.item}>
            <View style={styles.card}>
              <Pressable
                android_ripple={{
                  color: '#2d2a47'
                }} style={styles.btn}
                onPress={() => handleSelect(item.uri)}
              >
                <Image source={{ uri: item.uri }} style={styles.img} />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ModalPets

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  item: {
    padding: 10
  },
  card: {
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#2d2a4555',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10
  },
  btn: {
    padding: 10,
    backgroundColor: '#fff'
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
})
