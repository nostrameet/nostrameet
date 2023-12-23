import axios from 'axios'
import { BASE_URL } from 'constants/api.js'

const getMeetings = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/meetings`)
  console.log(data.data, 'response.data')
  return data.data
}

export default getMeetings
