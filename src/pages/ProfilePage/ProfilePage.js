import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Profile from 'components/Profile/Profile'
import Layout from 'components/Layout/Layout'

function ProfilePage() {
  return (
    <Layout>
      <Container>
        <Row>
          <Profile />
        </Row>
      </Container>
    </Layout>
  )
}
export default ProfilePage
