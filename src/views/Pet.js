import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPetById } from '../../services/pet'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../hooks/useAuth'

const Pet = ({ route }) => {
  const [pet, setPet] = useState([])
  const navigation = useNavigation()
  const { googleAuth } = useAuth()

  useEffect(() => {
    getPetById(route.params.id)
      .then(res => {
        setPet(res)
      }).catch(err => console.log(err))

    return () => {
    }
  }, [])

  return (
    <View style={styles.form}>
      <ScrollView contentContainerStyle={{ gap: 10, paddingHorizontal: 20, alignItems: 'center' }}>
        <View style={styles.addPhoto}>
          <Image style={styles.img} source={{ uri: pet.photo }} />
        </View>
        <Text style={styles.label}><Icon name='paw' size={20} color='#8e94b6' />     Nombre</Text>
        <Text style={styles.text}>{pet.name}</Text>
        <Text style={styles.label}><Icon name='calendar' size={20} color='#8e94b6' />     Fecha de Nacimiento</Text>
        <Text style={styles.text}>{pet.birthdate}</Text>
        <Text style={styles.label}><Icon name='atom' size={20} color='#8e94b6' />     Raza</Text>
        <Text style={styles.text}>{pet.race}</Text>
        <Text style={styles.label}><Icon name='paw' size={20} color='#8e94b6' />     Mascota</Text>
        <Text style={styles.text}>{pet.pet}</Text>
        <Text style={styles.label}><Icon name='venus-mars' size={20} color='#8e94b6' />     Genero</Text>
        <Text style={styles.text}>{pet.gender}</Text>
        <View style={styles.container}>
          <View>
            <Pressable
              style={styles.touchableContainer} activeOpacity={0.6}
              onPress={() => navigation.navigate('Vaccines', { vacc: pet.vaccines })}
              android_ripple={{ color: '#9a96ce', borderless: true }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F7F9F9' }}>
                Historial de Vacunas
              </Text>
            </Pressable>
          </View>
          {googleAuth.role === 'vet' &&
            <View style={{ marginTop: 20 }}>
              <Pressable
                style={[styles.touchableContainer, { backgroundColor: '#1fc28b' }]} activeOpacity={0.6}
                onPress={() => navigation.navigate('AddVaccine', { pet: route.params.id, veterinary: googleAuth.id })}
                android_ripple={{ color: '#9a96ce', borderless: true }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F7F9F9' }}>
                  Crear Vacuna
                </Text>
              </Pressable>
            </View>}
        </View>
      </ScrollView>
    </View>
  )
}

export default Pet

const styles = StyleSheet.create({
  form: {

  },
  addPhoto: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 30,
    marginBottom: 30
  },
  img: {
    width: 130,
    height: 130,
    resizeMode: 'contain'
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
  },
  container: {
    flex: 1,
    padding: 20
  },
  touchableContainer: {
    borderRadius: 20,
    paddingHorizontal: 20,
    overflow: 'hidden', // Para asegurarse de que el contenido no se salga del borde redondeado
    backgroundColor: '#8a81fe',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
