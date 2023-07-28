import { dbApiUri } from '../src/config/constants'

export const getPet = async () => {
  try {
    const pet = await fetch(`${dbApiUri}/api/pet`)
    const data = await pet.json()
    return data
  } catch (error) {
    console.log(error.message)
  }
}

export const createPet = async (objData) => {
  try {
    const pet = await fetch(`${dbApiUri}/api/pet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objData)
    })
    const data = await pet.json()
    return data
  } catch (error) {
    console.log(error.message)
  }
}

export const getPetById = async (id) => {
  try {
    const pet = await fetch(`${dbApiUri}/api/pet/${id}`)
    const data = await pet.json()
    return data
  } catch (error) {
    console.log(error.message)
  }
}
