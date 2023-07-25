// import { useNavigation } from '@react-navigation/native-stack'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export const useAuth = () => {
  const { googleAuth, handleGoogleAuthentication, signInWithGoogle, signOut, loading, message } =
    useContext(AuthContext)

  // const navigation = useNavigation()

  // useEffect(() => {
  //   let monted = true
  //   if (monted) {
  //     message === 'signup' && navigation.navigate('UpdateScreen')
  //   }
  //   return () => {
  //     monted = false
  //   }
  // }, [message])

  return {
    googleAuth,
    handleGoogleAuthentication,
    signInWithGoogle,
    signOut,
    loading,
    message
  }
}
