import axios from 'axios'
import { BASE_URL } from 'constants/api.js'

const getProfile = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/users?populate=avatar`)
  //TODO fix this to only the user
  console.log(data[0], 'response.data')
  return data[0]
}

export default getProfile
