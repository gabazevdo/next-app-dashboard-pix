import { useEffect, useState } from 'react'
import { getMetrics } from '@/utils/dataService'
import Chart from '../chart/Chart'

export default function Main() {
  const [data, setData] = useState([])
  const [start, setStart] = useState('2023-03-13T05:00:00.000')
  const [end, setEnd] = useState('2023-03-13T06:00:00.000')
  const [time, setTime] = useState()

  useEffect(() => {
    getMetrics(start, end, time)
      .then(res => {
        let creating_count = [0, 0, 0, 0]
        let created_count = [0, 0, 0, 0]
        let paid_count = [0, 0, 0, 0]
        let events_count = [0, 0, 0, 0]

        res.data.map(item => {
  
            creating_count[0] = creating_count[0] + item.creating_count
            created_count[0] = created_count[0] + item.created_count
            paid_count[0] = paid_count[0] + item.paid_count
            events_count[0] = events_count[0] + item.events_count
         
        })

        setData([
          {
            name: 'CREATING',
            data: creating_count
          },
          {
            name: 'CREATED',
            data: created_count
          },
          {
            name: 'PAID',
            data: paid_count
          },
          {
            name: 'EVENTS',
            data: events_count
          }
        ])
      })
      .catch(err => console.log('deu err', err))
  }, [time])

  function onChangeMinutes(event) {
    setTime(event.target.value)
  }

  function onChangeCalendar(event) {
    setStart(event.target.value)
  }

  console.log('dataaaa', data)
  return (
    <>
      <div>
        <input type="date" onChange={onChangeCalendar} />
        <select onChange={onChangeMinutes}>
          <option value={'1'}>1 min</option>
          <option value={'5'}>5 min</option>
          <option value={'15'}>15 min</option>
          <option value={'30'}>30 min</option>
          <option value={'60'}>60 min</option>
        </select>
        <Chart data={data} />
      </div>
    </>
  )
}
