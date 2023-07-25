import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../views/Home'
import Pets from '../views/Pets'
import Vaccines from '../views/Vaccines'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialBottomTabNavigator()

// const Tab = createMaterialTopTabNavigator()

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home1'
      activeColor='#20c18b'
      inactiveColor='#785dbdd9'
      barStyle={{ backgroundColor: '#fefefc', height: 80, paddingVertical: 5 }}
    >
      <Tab.Screen
        name='Home1'
        component={Home}
        options={{
          // tabBarIcon: 'home-variant'
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (<Icon name='home' size={20} color={color} />)
        }}
      />
      <Tab.Screen
        name='Pets'
        component={Pets}
        options={{
          // tabBarIcon: 'paw',
          title: 'Mascotas',
          tabBarIcon: ({ color }) => (<Icon name='paw' size={20} color={color} />),
          tabBarColor: '#694fad'
        }}
      />
      <Tab.Screen
        name='Vaccines'
        component={Vaccines}
        options={{
          // tabBarIcon: 'eyedropper-variant',
          title: 'Vacunas',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (<Icon name='syringe' size={20} color={color} />)
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes
