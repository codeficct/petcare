import { dbApiUri } from '../src/config/constants'

// create vaccine
export const createVaccine = async (vaccine) => {
  try {
    const newVaccine = await fetch(`${dbApiUri}/api/vaccine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vaccine)
    })
    const data = await newVaccine.json()
    return data
  } catch (error) {

  }
}
