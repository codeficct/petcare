import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { getUserById } from '../../services/user'
import { useAuth } from '../hooks/useAuth'
import { getPet } from '../../services/pet'

const HorizontalPets = ({ user }) => {
  const navigation = useNavigation()
  return (
    <ScrollView horizontal contentContainerStyle={{ gap: 20, paddingBottom: 20, paddingHorizontal: 20 }}>
      {user && user?.length > 0
        ? user.map((item) => (
          <View key={item?._id} style={styles.pet}>
            <Pressable
              android_ripple={{
                color: '#bfafff55'
              }}
              style={{ padding: 10 }}
              onPress={() => navigation.navigate('Pet', { id: item?._id })}
            >
              <View>
                <Image style={styles.photo} source={{ uri: item?.photo }} />
                <View style={styles.leyend}>
                  <Text style={styles.name}>{item?.name}</Text>
                  {item?.gender === 'male' ? <Icon name='mars' size={20} color='#09f' style={styles.icon} /> : <Icon name='venus' size={20} color='#f4f' style={styles.icon} />}
                </View>
                <Text style={styles.year}>{item?.birthdate}</Text>
              </View>
            </Pressable>
          </View>

        ))
        : <Text style={styles.year}>Todavía no has registrado ninguna mascota :(</Text>}
    </ScrollView>
  )
}

const VerticalPets = ({ pets }) => {
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20, gap: 20, paddingBottom: 20 }}>
      {pets && pets?.length > 0
        ? pets?.map((pet) => (
          <View
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // width: '100%',
              // alignItems: 'center',
              // gap: 20,
              backgroundColor: '#fff',
              // paddingHorizontal: 10,
              borderRadius: 20,
              shadowColor: '#0005',
              shadowOffset: {
                width: 0,
                height: 0
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              overflow: 'hidden'
            }} key={pet._id}
          >
            <Pressable
              android_ripple={{
                color: '#bfafff55'
              }}
              style={{ paddingHorizontal: 10 }}
              onPress={() => navigation.navigate('Pet', { id: pet._id })}
            >
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                gap: 20
              }}
              >
                <Image
                  style={{
                    height: 90,
                    width: 90,
                    resizeMode: 'contain'
                  }} source={{ uri: pet.photo }}
                />
                <View style={{ flex: 1 }}>
                  <View>
                    <Text style={{ fontSize: 20, color: '#2d2a45', fontWeight: '500' }}>{pet?.name}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* <Text style={{ fontSize: 14, color: '#8f95b7' }}>{pet.owner.name}</Text> */}
                    <Image
                      style={{
                        height: 40,
                        width: 40,
                        resizeMode: 'contain',
                        borderRadius: 100
                      }} source={{ uri: pet.owner.photo }}
                    />
                  </View>
                </View>
              </View>

            </Pressable>

          </View>
        ))
        : <Text style={styles.year}>Todavía no has registrado ninguna mascota :(</Text>}
    </ScrollView>
  )
}

const Pets = ({ isLoading }) => {
  const { googleAuth } = useAuth()
  const navigation = useNavigation()
  const [user, setUser] = useState([])
  const [mount, setmount] = useState(false)
  let clean2 = true
  useEffect(() => {
    clean2 && getUserById(googleAuth.id)
      .then(res => {
        // eslint-disable-next-line space-before-function-paren
        function invertData2(data) {
          if (data.length === 0) {
            return data
          } else {
            return [data[data.length - 1], ...invertData2(data.slice(0, data.length - 1))]
          }
        }
        setUser(invertData2(res.pets))
      }).catch(err => console.log(err))
    return () => {
      clean2 = false
    }
  }, [])
  let clean1 = true
  useEffect(() => {
    clean1 && googleAuth.role === 'user' && getUserById(googleAuth.id)
      .then(res => {
        // eslint-disable-next-line space-before-function-paren
        function invertData2(data) {
          if (data.length === 0) {
            return data
          } else {
            return [data[data.length - 1], ...invertData2(data.slice(0, data.length - 1))]
          }
        }
        setUser(invertData2(res.pets))
      }).catch(err => console.log(err))
    return () => {
      clean1 = false
    }
  }, [isLoading])
  let clean = true
  useEffect(() => {
    clean && googleAuth.role === 'vet' && getPet().then(res => {
      setUser(res)
    })
    // eslint-disable-next-line space-before-function-paren

    return () => {
      clean = false
    }
  }, [googleAuth.role === 'vet', isLoading])

  useEffect(() => {
    setmount(true)
    return () => {
      setmount(false)
    }
  }, [])

  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <Text style={styles.title}>{googleAuth.role === 'vet' ? 'Las Mascotas' : 'Mis Mascotas'}</Text>
        {googleAuth.role === 'user' && <View style={styles.plus}>
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
        </View>}
      </View>
      <View style={styles.pets}>
        {/* {googleAuth.role === 'user' ? <HorizontalPets user={user} /> : <VerticalPets pets={user} />} */}
        {mount && <HorizontalPets user={user} />}
      </View>
    </View>
  )
}

export default Pets

const styles = StyleSheet.create({
  contain: {
    paddingBottom: 30
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
    // padding: 10,
    overflow: 'hidden',
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
    height: 200,
    borderRadius: 20,
    resizeMode: 'contain'
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
