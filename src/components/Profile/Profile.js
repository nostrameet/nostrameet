import React from 'react'
// import { BASE_URL } from 'constants/api'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import { useNDK } from '@nostr-dev-kit/ndk-react'

export default function Profile() {
  const { getProfile } = useNDK()
  return (
    <Container>
      {}
      <Image src={getProfile('npub1rsjkwdac3k6uc220w49x8sn5qdtdrl5x6l0y4azslytf86ywf4aszqhlcy').image} thumbnail />
      {/* <Image src={`${BASE_URL}${profile?.avatar?.url}`} alt={`${profile?.username}`} thumbnail /> */}
    </Container>
  )
}
