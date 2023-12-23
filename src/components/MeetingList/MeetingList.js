import React from 'react'
import Meeting from 'components/Meeting/Meeting'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { useMeetings } from 'hooks/meetings'

export default function MeetingList() {
  const meetings = useMeetings()

  return (
    <Container>
      <Row>
        <ListGroup>{meetings?.map((item) => Meeting(item))}</ListGroup>
      </Row>
    </Container>
  )
}
