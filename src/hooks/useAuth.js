// import { useNavigation } from '@react-navigation/native-stack'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export const useAuth = () => {
  const { googleAuth, handleGoogleAuthentication, handlePhotoPet, photoPet } = useContext(AuthContext)
  return { googleAuth, handleGoogleAuthentication, handlePhotoPet, photoPet }
}
