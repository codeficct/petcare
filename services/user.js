import { dbApiUri } from '../src/config/constants'

export const authGoogle = async (objData) => {
  try {
    const login = await fetch(`${dbApiUri}/api/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objData)
    })
    const data = await login.json()
    return data
  } catch (error) {

  }
}

export const getUserById = async (id) => {
  try {
    const user = await fetch(`${dbApiUri}/api/user/${id}`)
    const data = await user.json()
    return data
  } catch (error) {

  }
}

export const getUserByEmail = async (email) => {
  try {
    const user = await fetch(`${dbApiUri}/api/user/${email}`)
    const data = await user.json()
    return data
  } catch (error) {

  }
}
