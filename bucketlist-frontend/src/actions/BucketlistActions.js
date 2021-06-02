

export const fetchActivity = (dispatch) => {
fetch('http://localhost:3000/api/v1/bucketlist_items' , {
  method: 'GET',
  "Content-Type": "application/json",
  "Accept": "application/json",
  'Authorization': `Bearer ${localStorage.token}`
})
.then(res => res.json())
.then(data => {
  dispatch({
    type: 'FETCH_ACTIVITY',
    payload: data   
  })
})
}



// adds activities with fetch
export const addActivity = (bucketlist_item, tripObject) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/bucketlist_items/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
        'Authorization': `Bearer ${localStorage.token}`},
        body: JSON.stringify({ bucketlist_item: bucketlist_item, tripObject: tripObject})
      })
      .then(res => res.json())
      .then(trip => {
        dispatch({type: 'ADD_ACTIVITY', payload: trip})
      })
    };
  };

  // deletes activities with fetch
  export const deleteActivity = (bucketlistId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/bucketlist_items/${bucketlistId}`, {
        method: 'DELETE',
    })
      .then(res => res.json())
      .then(trip =>
        dispatch({type: 'DELETE_ACTIVITY', payload: trip.id})
      )
    };
  };
