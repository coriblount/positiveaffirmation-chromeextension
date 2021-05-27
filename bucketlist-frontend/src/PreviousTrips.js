import React from 'react'
import { Link } from 'react-router-dom';

const PreviousTrips = (props) => {
return(
    <div>
      <h3>Your Previous Trips:</h3>  
      {props.trips.map(trip =>{
          if (trip.visited === true) {
              return (
                 <Link key={trip.id} to={`/trips/${trip.id}`}></Link>
                 //style a card with trip name, destination, & image?
              )
          }
          else
          return(
              null
          )
      } )}
    </div>
)
}

export default PreviousTrips