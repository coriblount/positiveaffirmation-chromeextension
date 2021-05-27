
// adds activities with fetch
export const addActivity = (activity, tripId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/trips/${tripId}/bucketlist_items`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
        'Authorization': `Bearer ${localStorage.token}`},
        body: JSON.stringify(activity)
      })
      .then(res => res.json())
      .then(trip => {
        dispatch({type: 'ADD_ACTIVITY', payload: trip})
      })
    };
  };

  // deletes activities with fetch
  export const deleteActivity = (activityId, tripId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/trips/${tripId}/bucketlist_items/${activityId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      },
    })
      .then(res => res.json())
      .then(trip =>
        dispatch({type: 'DELETE_ACTIVITY', payload: trip})
      )
    };
  };
