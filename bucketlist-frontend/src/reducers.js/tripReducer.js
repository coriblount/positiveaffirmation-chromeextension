const initialState = {
  trips: [],
  bucketlist_item: []
}

const tripReducer = (state =  initialState, action) => {

    switch (action.type) {
  
      case 'FETCH_TRIPS':
        return {...state, trips: action.payload};
  
      case 'ADD_TRIPS':
        return {...state, trips: [...state.trips, action.payload]};
  
      case 'DELETE_TRIP':
        const filteredTrips = state.trips.filter(trip=> trip.id !== action.payload)
        return {...state, trips: filteredTrips}
  
      case 'TOGGLE_VISITED':
      case 'TOGGLE_BUCKET_LIST':
        const trip = state.trips.map(trip => {
          if (trip.id !== action.payload.id) {
            return trip
          } else {
            return action.payload
          }
        })
        return {...state, trips: trip}

        case 'FETCH_ACTIVITY':
        return {...state, bucketlist_item: action.payload};
  
      case 'ADD_ACTIVITY':
        const addActivity = state.trips.map(trip => {
          if (trip.id === action.payload.id) {
            return action.payload
          } else {
            return trip
          }
        })
        return {...state, bucketlist_item: [...state.bucketlist_item, action.payload] , trips: addActivity}
  
      case 'DELETE_ACTIVITY':
        const deleteActivityTrip = state.trips.map(trip => {
          if (trip.id === action.payload.id) {
            return action.payload
          } else {
            return trip
          }
        })
        return {...state, trips: deleteActivityTrip}
  
      default:
        return state;
    }
  }
  
  export default tripReducer;