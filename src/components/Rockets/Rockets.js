import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllRockets, getRocketsStatus, getRocketsError, fetchRockets, reserveRocket } from './rocketSlice.js'

const RocketsIndex = () => {
  const dispatch = useDispatch()
  const rockets = useSelector(selectAllRockets)
  const rocketStatus = useSelector(getRocketsStatus)
  const error = useSelector(getRocketsError)

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets())
    }
  }, [rocketStatus, dispatch])

  function displayReservedText(currState) {
    return currState ? 'Cancel Reservation' : 'Reserve Rockets'
  }

  function handleReserveRocket(id) {
    dispatch(reserveRocket(id))
  }

  let contentToDisplay = ''
  if (rocketStatus === 'loading') {
    contentToDisplay = <h2>Loading...</h2>
  } else if (rocketStatus === 'succeeded') {
    contentToDisplay = rockets.map((data) => (
      <div key={data.id}>
        <h2>{data.rocket_name}</h2>
        <p>
          {data.reserved && (
            <span
              style={{
                marginRight: 10,
                border: '1px solid',
                padding: '2px 4px'
              }}
            >
              Reserved
            </span>
          )}
          {data.description}
        </p>
        <button onClick={() => handleReserveRocket(data.id)} type='button'>
          {displayReservedText(data.reserved)}
        </button>{' '}
        <hr />
      </div>
    ))
  } else if (rocketStatus === 'failed') {
    contentToDisplay = <p>{error}</p>
  }

  return (
    <div>
      <h1>Rockets page</h1>
      {contentToDisplay}
    </div>
  )
}

export default RocketsIndex
