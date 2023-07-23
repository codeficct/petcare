import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'
import { useState } from 'react'

const Stack = createNativeStackNavigator()

const Routes = () => {
  const [login, setlogin] = useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!login
          ? <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
          : <Stack.Screen name='Home' component={Home} />}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
