import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useNostrMeetings } from 'hooks/nostrMeetings'
const localizer = momentLocalizer(moment)

const MeetingsCalendar = () => {
  const meetings = useNostrMeetings()

  return (
    <div>
      <Calendar
        defaultView='agenda'
        localizer={localizer}
        events={meetings}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
      />
    </div>
  )
}

export default MeetingsCalendar
