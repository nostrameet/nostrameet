import React from 'react'
import { BASE_URL } from 'constants/api'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { useProfile } from 'hooks/profileHooks'

export default function Profile() {
  // const [profile, setProfile] = useState([])

  // useEffect(() => {
  //   fetch(`${BASE_URL}/api/users?populate=avatar`)
  //     .then((response) => response.json())
  //     .then((response) => response[0])
  //     .then(setProfile)
  //     .catch((error) => {
  //       console.log('error', error)
  //     })
  // }, [])

  const profile = useProfile()
  return (
    <Container>
      <Image src={`${BASE_URL}${profile?.avatar?.url}`} alt={`${profile?.username}`} thumbnail />
    </Container>
  )
}
