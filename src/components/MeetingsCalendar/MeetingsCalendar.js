import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { parseMeetings } from 'utils/parsers'

import { useMeetings } from 'hooks/meetings'
const localizer = momentLocalizer(moment)

const MeetingsCalendar = () => {
  const meetings = useMeetings()

  return (
    <div>
      <Calendar
        defaultView='agenda'
        localizer={localizer}
        events={parseMeetings(meetings)}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
      />
    </div>
  )
}

export default MeetingsCalendar
