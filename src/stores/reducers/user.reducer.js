const initialState = {
  name: '',
  selectedEvent: {},
  userSort: {}
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: payload,
        selectedEvent: {
          ...state.selectedEvent,
          [payload]: state.selectedEvent[payload] || []
        },
        userSort: {
          ...state.userSort,
          [payload]: state.userSort[payload] || []
        }
      }
    case 'SORT_EVENT':
      return {
        ...state,
        userSort: {
          ...state.userSort,
          [state.name]: payload
        }
      }
    case 'TRACK_EVENT':
      return {
        ...state,
        selectedEvent: {
          ...state.selectedEvent,
          [state.name]: state.selectedEvent[state.name]?.includes(payload)
            ? [...state.selectedEvent[state.name]]
            : [...state.selectedEvent[state.name], payload]
        }
      }
    case 'REMOVE_EVENT':
      return {
        ...state,
        selectedEvent: {
          ...state.selectedEvent,
          [state.name]: [
            ...state.selectedEvent[state.name].filter(o => o != payload)
          ]
        }
      }

    default:
      return state
  }
}

export default userReducer
