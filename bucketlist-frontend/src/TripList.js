import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';


//shows list of user trips 
const TripList = props => {

  return (
    <div className='TripContainer'>
      <Link to='/trips/new' className='AddTripButton' role='button'>Add A New Trip</Link>

    <h3>Your Trips</h3>
      {props.trips.map(trip =>
        <Link key={trip.id} to={`/Trip/${trip.id}`}>
          <Card className = 'DestinationCard'>
            <CardBody>
              <CardTitle>{trip.name} - {trip.destination}</CardTitle>
            </CardBody>
          </Card>
        </Link>
      )}
    </div>
  );
};

export default TripList;