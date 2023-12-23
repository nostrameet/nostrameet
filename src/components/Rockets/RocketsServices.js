import axios from 'axios'

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets'

const getRockets = async () => {
  const response = await axios.get(ROCKET_URL)
  response.data.forEach((object) => {
    object.reserved = false
  })
  return response.data
}

export default getRockets
