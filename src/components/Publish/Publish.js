import React from 'react'
import { usePublish } from 'nostr-hooks'
import ReactDatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'

import { v7 as uuidv7 } from 'uuid'

import 'react-datepicker/dist/react-datepicker.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import RELAYS from 'constants/relays'
import { setTitle, setStart, setEnd, selectTitle, selectStart, selectEnd } from 'components/Publish/publishSlice'
import { hidePanel } from 'components/Panel/panelSlice'

export const Publish = () => {
  const dispatch = useDispatch()
  const title = useSelector(selectTitle)
  const start = useSelector(selectStart)
  const end = useSelector(selectEnd)

  const publish = usePublish(RELAYS)

  const handleSubmit = async () => {
    await publish({
      kind: 31922,
      content: title,
      tags: [
        ['d', uuidv7()],
        ['title', title],
        ['start', start.toISOString()],
        ['end', end.toISOString()]
      ]
    })
    dispatch(setTitle(''))
    dispatch(hidePanel())
  }

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='title'>
          <Form.Control
            type='text'
            placeholder='Your awesome event name'
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='start'>
          <ReactDatePicker
            className='form-control'
            selected={start}
            onChange={(date) => dispatch(setStart(date))}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption='start'
            dateFormat='d, MMMM, yyyy h:mm aa'
            isClearable={true}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='end'>
          <ReactDatePicker
            className='form-control'
            selected={end}
            onChange={(date) => dispatch(setEnd(date))}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption='end'
            dateFormat='d, MMMM, yyyy h:mm aa'
            isClearable={true}
          />
        </Form.Group>

        <Button variant='primary' onClick={handleSubmit}>
          Publish
        </Button>
      </Form>
    </>
  )
}
