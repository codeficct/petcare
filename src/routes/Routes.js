import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../views/Login/Login'
import Role from '../views/Login/Role'
import { Image, TouchableOpacity } from 'react-native'
import ModalUser from '../views/modal/ModalUser'
import Home from '../views/Home'
import AddPet from '../views/AddPet'
import ModalPermission from '../views/modal/ModalPermission'
import { useAuth } from '../hooks/useAuth'

const Stack = createNativeStackNavigator()

const LoginRendering = (googleAuth) => {
  if (!googleAuth.signIn) {
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
                }} source={{ uri: googleAuth.photo }}
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
    </>
  )
}

const Routes = () => {
  const { googleAuth } = useAuth()
  console.log(googleAuth)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {LoginRendering(googleAuth)}
        </Stack.Group>

        {/* <Stack.Group screenOptions={{ presentation: 'card', gestureDirection: 'vertical', animation: 'flip' }}> */}
        {/* </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
