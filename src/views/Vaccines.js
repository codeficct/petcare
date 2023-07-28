import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getPetById } from '../../services/pet'
const vac = [
  {
    id: 1,
    name: 'Rabia',
    date: '12/12/2020'
  },
  {
    id: 2,
    name: 'Moquillo',
    date: '12/12/2020'
  },
  {
    id: 3,
    name: 'Parvovirus',
    date: '12/12/2020'
  },
  {
    id: 4,
    name: 'Hepatitis',
    date: '12/12/2020'
  },
  {
    id: 5,
    name: 'Leptospirosis',
    date: '12/12/2020'
  }
]
const VaccineListItem = ({ vacc }) => {
  return (
    <View style={styles.item}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F7F9F9' }}>
        <Icon name='syringe' size={20} /> {'  '}
        {vacc.nameVaccine}
      </Text>
      <Text style={{ position: 'relative', fontSize: 15, color: '#F7F9F9' }}>
        {vacc.dateVaccine}
      </Text>
    </View>
  )
}

const Vaccines = ({ route }) => {
  const [pet, setPet] = useState([])
  useEffect(() => {
    getPetById(route.params.id)
      .then(res => {
        setPet(res)
      }).catch(err => console.log(err))

    return () => {
    }
  }, [])

  return (
    <ScrollView style={styles.container}>
      {route.params.vacc.length > 0 ? route.params.vacc.map(vc => <VaccineListItem key={vc._id} vacc={vc} />) : <Text style={{ fontSize: 20, fontWeight: '400', color: '#333' }}>No hay vacunas registradas</Text>}
    </ScrollView>
  )
}

export default Vaccines

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    backgroundColor: '#8a81fe',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 20,
    borderRadius: 24,
    overflow: 'hidden',
    alignItems: 'center'
  }
})
