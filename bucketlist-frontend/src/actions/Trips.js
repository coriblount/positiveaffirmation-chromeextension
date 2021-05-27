

// fetch all destinations 
export const fetchTrips = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/trips')
      .then(res => res.json())
      .then(trips => dispatch({
        type: 'FETCH_TRIPS',
        payload: trips
      }))
    };
  };

  // add destinations
  export const addTrips = (tripData, history, path) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/trips', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tripData)
      })
      .then(res => res.json())
      .then(trip => {
        history.push(path)
        dispatch({type: 'ADD_DESTINATION', payload: trip})
      })
    };
  };

  //delete destinations 
  export const deleteTrip = tripId => {
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${tripId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(trip => {
        dispatch({type: 'DELETE_TRIP', payload: trip.id})
      })
    };
  };
  

  // add destination to bucketlist with fetch
   export const toggleBucketList = (trip, tripId) => {
    const updatedBucketList = {...trip, bucket_list: !trip.bucket_list};
  
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${tripId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({trip: updatedBucketList})
      })
      .then(res => res.json())
      .then(trip => {
        dispatch({type: 'TOGGLE_BUCKET_LIST', payload: trip})
      })
    };
  };

  export const toggleVisited = (trip, tripId) => {
    const updatedVisited = {...trip, visited: !trip.visited};
  
    return (dispatch) => {
      fetch(`http://localhost:3000/destinations/${tripId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({trip: updatedVisited})
      })
      .then(res => res.json())
      .then(trip => {
        dispatch({type: 'TOGGLE_VISITED', payload: trip})
      })
    };
  };