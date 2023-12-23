import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Layout from 'components/Layout/Layout'
import MeetingList from 'components/MeetingList/MeetingList'

function MeetingsPage() {
  return (
    <Layout>
      <Container>
        <Row>
          <MeetingList />
        </Row>
      </Container>
    </Layout>
  )
}
export default MeetingsPage
