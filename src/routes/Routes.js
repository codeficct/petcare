import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../views/Login/Login'
import { useState } from 'react'
import Role from '../views/Login/Role'
import TabRoutes from './TabRoutes'
import NameUser from '../components/NameUser'
import { Image, TouchableOpacity } from 'react-native'
import ModalUser from '../views/modal/ModalUser'
import Home from '../views/Home'
import AddPet from '../views/AddPet'
import ModalPermission from '../views/modal/ModalPermission'

const Stack = createNativeStackNavigator()

const LoginRendering = (isLogin) => {
  if (isLogin) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: false,
            navigationBarColor: '#fefefb',
            statusBarColor: '#2d2a47'
          }}
          name='Login'
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            navigationBarColor: '#fefefb',
            statusBarColor: '#fefefb',
            statusBarStyle: 'dark',
            animation: 'fade_from_bottom'
          }}
          name='Role'
          component={Role}
        />
      </>
    )
  }

  return (
    <>
      <Stack.Screen
        name='Home' component={Home}
        options={({ navigation }) => ({
          title: 'Pet Care',
          headerStyle: { backgroundColor: '#f7f9fc' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: '#f7f9fc' },
          headerRight: props => (
            <TouchableOpacity
              {...props} activeOpacity={0.6} onPress={() => navigation.navigate('ModalUser')} style={{
                backgroundColor: '#b9f4e2', borderRadius: 50
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50
                }} source={{ uri: 'https://lh3.googleusercontent.com/ogw/AGvuzYagkQQ02FAeCluPAB4SN9aD_NO6QsnPxh2WcxBv=s32-c-mo' }}
              />
            </TouchableOpacity>
          ),
          statusBarStyle: 'dark',
          statusBarColor: '#f7f9fc',
          navigationBarColor: '#f7f9fc'
        })}
      />
      <Stack.Screen
        options={{
          navigationBarColor: '#f7f9fc',
          statusBarColor: '#f7f9fc',
          headerStyle: { backgroundColor: '#f7f9fc' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: '#f7f9fc' },
          statusBarStyle: 'dark',
          animation: 'fade_from_bottom',
          title: 'Añadir mascota',
          headerTintColor: '#2d2a47'
        }}
        name='AddPet'
        component={AddPet}
      />
    </>
  )
}

const Routes = () => {
  const [login, setlogin] = useState(true)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {LoginRendering(login)}
        </Stack.Group>

        {/* <Stack.Group screenOptions={{ presentation: 'card', gestureDirection: 'vertical', animation: 'flip' }}> */}
        <Stack.Screen
          options={{
            statusBarStyle: 'dark'
          }} name='ModalUser' component={ModalUser}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'fade_from_bottom',
            presentation: 'modal',
            navigationBarColor: '#f7f9fc',
            statusBarColor: '#f7f9fc',
            headerStyle: { backgroundColor: '#f7f9fc' },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: '#f7f9fc' },
            statusBarStyle: 'dark'
          }}
          name='ModalPermission'
          component={ModalPermission}
        />
        {/* </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
