import React from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import { Publish } from 'components/Publish/Publish'

import { useSelector, useDispatch } from 'react-redux'

import { hidePanel, selectVisibility, selectKeyword } from './panelSlice'

export const Panel = () => {
  const visibility = useSelector(selectVisibility)
  const keyword = useSelector(selectKeyword)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(hidePanel())

  const panelChildrens = {
    publish: { title: 'Publish a Meet', content: <Publish /> }
  }

  return (
    <>
      <Offcanvas show={visibility} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{panelChildrens[keyword]?.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{panelChildrens[keyword]?.content}</Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
