import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
export default function Meeting(item) {
  return (
    <ListGroup.Item variant='light' key={item?.id}>
      {item?.attributes?.title} desde:{item?.attributes?.start} hasta: {item?.attributes?.end}
    </ListGroup.Item>
  )
}
