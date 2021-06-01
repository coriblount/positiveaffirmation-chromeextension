
//authorization headers for all 


// fetch all trips
export const fetchTrips = (dispatch) => {

      fetch('http://localhost:3000/api/v1/trips',{
        method: 'GET',
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      })
      .then(res => res.json())
      .then(trips =>
      dispatch({
        type: 'FETCH_TRIPS',
        payload: trips     
      })
      )
    };


  // add trips
  export const addTrips = (tripData, history, path) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json",
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(tripData)
      })
      .then(res => res.json())
      .then(trip => {
        // history.push(path)
        dispatch({type: 'ADD_TRIPS', payload: trip})
      })
    };
  };

  //delete trips
  export const deleteTrip = trip => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/trips/${trip.id}`, {
        method: 'DELETE',
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      })
      .then(res => res.json())
      .then(trip => {
        dispatch({type: 'DELETE_TRIP', payload: trip.id})
      })
    };
  };
  

  // add trip to bucketlist with fetch
      export const toggleBucketList = (trip, tripId) => {
    const updatedBucketList = {...trip, bucket_list: !trip.bucket_list};
  
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json',
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      },
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
      fetch(`http://localhost:3000/api/v1/trips/${tripId}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json',
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      },
        body: JSON.stringify({trip: updatedVisited})
      })
      .then(res => res.json())
      .then(trip => {
        dispatch({type: 'TOGGLE_VISITED', payload: trip})
      })
    };
  };