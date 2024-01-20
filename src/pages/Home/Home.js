import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Layout from 'components/Layout/Layout'
import MeetingsCalendar from 'components/MeetingsCalendar/MeetingsCalendar'

function Home() {
  return (
    <Layout>
      <Container>
        <Row>
          <MeetingsCalendar></MeetingsCalendar>
        </Row>
      </Container>
    </Layout>
  )
}
export default Home
