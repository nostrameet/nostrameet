import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useDispatch } from 'react-redux'
import { showPanel } from 'components/Panel/panelSlice'
import { setStart, setEnd } from 'components/Publish/publishSlice'
import { useNostrMeetings } from 'hooks/nostrMeetings'

const localizer = momentLocalizer(moment)

const MeetingsCalendar = () => {
  const dispatch = useDispatch()

  const meetings = useNostrMeetings()

  const handleOnClick = (e) => {
    console.log('e', e)

    dispatch(showPanel())
    dispatch(setStart(e?.start))
    dispatch(setEnd(e?.start))
  }

  return (
    <div>
      <Calendar
        defaultView='agenda'
        localizer={localizer}
        events={meetings}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        onSelectSlot={handleOnClick}
        selectable
      />
    </div>
  )
}

export default MeetingsCalendar
