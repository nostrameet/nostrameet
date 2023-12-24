import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Profile from 'components/Profile/Profile'
import LogInExtension from 'components/Login/Login'
import Layout from 'components/Layout/Layout'

function ProfilePage() {
  return (
    <Layout>
      <Container>
        <Row>
          {/* <Profile /> */}
          <LogInExtension />
        </Row>
      </Container>
    </Layout>
  )
}
export default ProfilePage
