import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useNDK } from '@nostr-dev-kit/ndk-react'
import { useLoginNIP07 } from 'hooks/LoginNIP07'
import Image from 'react-bootstrap/Image'
import { Publish } from 'components/Publish/Publish'

export default function LogInExtension() {
  const { result, loading, connectExtension } = useLoginNIP07()
  const { getProfile } = useNDK()

  const profile = result?.user?.npub && getProfile(result?.user?.npub)

  return (
    <Container>
      <Row>
        <Button onClick={() => connectExtension()} disabled={loading}>
          {loading ? '...' : profile?.displayName ? profile?.displayName : 'Login'}
        </Button>
      </Row>
      <Row>
        <Col>
          <Image src={profile?.image} alt={profile?.displayName} thumbnail />
          <Publish />
        </Col>
      </Row>
    </Container>
  )
}
