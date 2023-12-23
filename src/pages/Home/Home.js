import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Layout from 'components/Layout/Layout'
import MeetingsCalendar from 'components/MeetingsCalendar/MeetingsCalendar'
// import { Counter } from 'components/Counter/Counter'
// import RocketsIndex from 'components/Rockets/Rockets'

function Home() {
  return (
    <Layout>
      <Container>
        {/* <Counter></Counter> */}
        {/* <RocketsIndex /> */}
        <Row>
          <MeetingsCalendar></MeetingsCalendar>
        </Row>
      </Container>
    </Layout>
  )
}
export default Home
