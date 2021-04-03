export const setName = name => {
  return {
    type: 'SET_NAME',
    payload: name
  }
}

export const trackEvent = eventId => {
  return {
    type: 'TRACK_EVENT',
    payload: eventId
  }
}

export const removeEvent = eventId => {
  return {
    type: 'REMOVE_EVENT',
    payload: eventId
  }
}
export const sortEvent = id => {
  return {
    type: 'SORT_EVENT',
    payload: id
  }
}
