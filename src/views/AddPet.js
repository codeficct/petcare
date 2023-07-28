import { Alert, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-picker/picker'
// import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'
// import { uploadToFirebase } from '../../firebaseConfig'
import { createPet } from '../../services/pet'
import { useAuth } from '../hooks/useAuth'

const AddPet = () => {
  // const [permission, requestPermission] = ImagePicker.useCameraPermissions()
  const { googleAuth, photoPet } = useAuth()
  const navigation = useNavigation()
  const [pet, setPet] = useState({
    name: '',
    photo: photoPet,
    pet: 'dog',
    birthdate: '',
    race: '',
    owner: googleAuth.id,
    gender: 'male'
  })
  const [date, setDate] = useState({ day: '', month: '', year: '' })

  const handleSubmit = () => {
    console.log(date)
    const bithDate = `${date.day}/${date.month}/${date.year}`
    const { name, race } = pet
    if (bithDate === '' ||
      name === '' || race === '') {
      return Alert.alert('Todos los campos son obligatorios')
    }
    createPet({ ...pet, birthdate: bithDate })
      .then(res => {
        if (res.message === 'Pet created') {
          navigation.navigate('Home')
        } else {
          Alert.alert('La mascota ya existe')
        }
      })
  }

  const handlePhotoPets = () => {
    navigation.navigate('ModalPets')
  }

  // const takePhoto = async () => {
  //   try {
  //     const cameraResp = await ImagePicker.launchCameraAsync({
  //       allowsEditing: true,
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       quality: 1
  //     })
  //     if (!cameraResp.canceled) {
  //       // setPet(prev => ({ ...prev, photo: cameraResp.uri }))
  //       const { uri } = cameraResp.assets[0]
  //       console.log(cameraResp.assets[0])
  //       setPet(prev => ({ ...prev, photo: uri }))
  //       await uploadToFirebase(uri)
  //     }
  //   } catch (error) {
  //     Alert.alert('Error Uploading Image ' + error.message)
  //   }
  // }

  // const OpenCamera = () => {
  //   try {
  //     if (permission?.status !== ImagePicker.PermissionStatus.GRANTED) {
  //       return (
  //         navigation.navigate('ModalPermission', { status: permission?.status, requestPermission })
  //       )
  //     }
  //     takePhoto()
  //   } catch (error) {
  //   }
  // }

  useEffect(() => {
    if (photoPet !== '') {
      setPet(prev => ({ ...prev, photo: photoPet }))
    }
    return () => {

    }
  }, [photoPet])

  return (
    <KeyboardAvoidingView enabled style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.form}>
        <ScrollView contentContainerStyle={{ gap: 15, paddingHorizontal: 20 }}>
          <TouchableOpacity activeOpacity={0.7} onPress={handlePhotoPets}>
            <View style={styles.addPhoto}>
              {pet.photo !== ''
                ? <Image style={styles.img} source={{ uri: pet.photo }} />
                : <Image style={styles.img} source={require('../assets/addpet.png')} />}
              <Icon style={styles.icon} name='camera' size={30} color='#ccc' />
            </View>
          </TouchableOpacity>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            placeholder='Escriba el nombre de su mascota'
            placeholderTextColor='#aaa'
            value={pet.name}
            defaultValue={pet.name}
            onChangeText={nameTxt => setPet(prev => ({ ...prev, name: nameTxt }))}
            style={styles.textInput}
          />

          <Text style={styles.label}>Fecha de Nacimiento</Text>
          <View style={styles.date}>
            <TextInput
              inputMode='numeric'
              keyboardType='numeric'
              maxLength={2}
              textContentType='oneTimeCode'
              placeholder='día'
              placeholderTextColor='#aaa'
              style={styles.textInput}
              value={date.day}
              defaultValue={date.day}
              onChangeText={txt => setDate(prev => ({ ...prev, day: txt }))}
            />
            <TextInput
              inputMode='numeric'
              keyboardType='numeric'
              maxLength={2}
              placeholder='mes'
              placeholderTextColor='#aaa'
              style={styles.textInput}
              value={date.month}
              defaultValue={date.month}
              onChangeText={txt => setDate(prev => ({ ...prev, month: txt }))}
            />
            <TextInput
              inputMode='numeric'
              keyboardType='numeric'
              placeholder='año'
              maxLength={4}
              placeholderTextColor='#aaa'
              style={styles.textInput}
              value={date.year}
              defaultValue={date.year}
              onChangeText={txt => setDate(prev => ({ ...prev, year: txt }))}
            />
          </View>

          <Text style={styles.label}>Raza</Text>
          <TextInput
            placeholder='Pastor Alemán...'
            placeholderTextColor='#aaa'
            value={pet.race}
            defaultValue={pet.race}
            onChangeText={txt => setPet(prev => ({ ...prev, race: txt }))}
            style={styles.textInput}
          />

          <Text style={styles.label}>Mascota</Text>
          <Picker
            mode='dropdown'
            selectedValue={pet.pet}
            style={{ color: '#2d2a47', marginBottom: 0, backgroundColor: '#fff' }}
            dropdownIconColor='#2d2a47'
            onValueChange={(itemValue) => setPet(prev => ({ ...prev, pet: itemValue }))}
          >
            <Picker.Item label='Perro' value='dog' />
            <Picker.Item label='Gato' value='cat' />
            <Picker.Item label='Avé' value='bird' />
            <Picker.Item label='Hamster' value='hamster' />
          </Picker>
          <Text style={styles.label}>Genero</Text>
          <Picker
            mode='dropdown'
            selectedValue={pet.gender}
            style={{ color: '#2d2a47', marginBottom: 0, backgroundColor: '#fff', borderRadius: 10 }}
            dropdownIconColor='#2d2a47'
            onValueChange={(itemValue) => setPet(prev => ({ ...prev, gender: itemValue }))}
          >
            <Picker.Item label='Hembra' value='female' />
            <Picker.Item label='Macho' value='male' />
          </Picker>
          <View style={styles.button}>
            <Pressable
              android_ripple={{ color: '#bfafff', borderless: true }}
              style={styles.btn}
              onPress={handleSubmit}
            >
              <Text style={styles.btnText}>Crear</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

export default AddPet

const styles = StyleSheet.create({
  form: {

  },
  addPhoto: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 30
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
    fontSize: 14
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
  }
})
