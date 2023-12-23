const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date('2023-12-12T13:45:00-05:00'),
    end: new Date('2023-12-12T14:45:00-05:00')
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date('2023-12-12T13:45:00-05:00'),
    end: new Date('2023-12-12T14:45:00-05:00')
  },
  {
    id: 2,
    title: 'Conference',
    start: new Date('2023-12-22T13:45:00-05:00'),
    end: new Date('2023-12-22T14:45:00-05:00'),
    desc: 'Big conference for important people'
  },
  {
    id: 3,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 1)),
    end: new Date(new Date().setHours(new Date().getHours() + 1))
  },
  {
    id: 4,
    title: 'Conference',
    start: new Date('2023-12-26T13:45:00-05:00'),
    end: new Date('2023-12-28T14:45:00-05:00'),
    desc: 'Big conference for important people'
  }
]

export default events
