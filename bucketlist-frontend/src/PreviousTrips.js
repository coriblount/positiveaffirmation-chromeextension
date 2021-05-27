import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

const PreviousTrips = (props) => {
return(
    <div>
        <h3>Your Previous Trips:</h3>  
        {props.trips.map(trip =>{
            if (trip.visited === true) {
                return (
                    <Link key={trip.id} to={`/trips/${trip.id}`}>
                        <Card className = 'TripCard'>
                    <CardBody>
                    <CardTitle>{trip.name} - {trip.destination}</CardTitle>
                        </CardBody>
                    </Card>
                    </Link>
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