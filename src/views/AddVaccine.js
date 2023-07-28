import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createVaccine } from '../../services/vaccine'

const AddVaccine = ({ route, navigation }) => {
  const [data, setData] = useState({ nameVaccine: '', dateVaccine: '' })

  const handleGuardar = () => {
    createVaccine({
      nameVaccine: data.nameVaccine,
      dateVaccine: data.dateVaccine,
      veterinary: route.params.veterinary,
      pet: route.params.pet
    })
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de la vacuna:</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese el nombre de la vacuna'
        value={data.nameVaccine}
        onChangeText={txt => setData(prev => ({ ...prev, nameVaccine: txt }))}
      />

      <Text style={styles.label}>Fecha de la vacuna (DD-MM-YYYY):</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese la fecha de la vacuna'
        value={data.dateVaccine}
        onChangeText={txt => setData(prev => ({ ...prev, dateVaccine: txt }))}

      />

      <TouchableOpacity style={styles.button} onPress={() => handleGuardar()}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddVaccine

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d2a45',
    marginBottom: 5,
    paddingBottom: 10
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    marginBottom: 20,
    paddingHorizontal: 12
  },
  button: {
    backgroundColor: '#1fc28b',
    padding: 10,
    height: 48,
    borderRadius: 14,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
