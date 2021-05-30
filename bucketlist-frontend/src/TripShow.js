import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { deleteTrip, toggleBucketList, toggleVisited } from './actions/Trips';
import BucketlistList from './BucketlistList';




const TripShow = (props) => {
  console.log(props)

  let trip = props.trips.filter(trip => trip.id === props.trips[0].id) ;


  const handleDelete = () => {
    props.deleteTrip(trip.id);
    const path = `/trips`;
    props.history.push(path);
  };

  const handleVisited = () => {
    props.toggleVisited(trip, trip.id)
  }

  const handleBucketList = () => {
    props.toggleBucketList(trip, trip.id)
  }

  return (
    <div>
    
      <Card className = 'TripShow'>
      <CardBody>
          <CardTitle style={{border: 'dotted' }}>{trip && trip.name} - {trip && trip.destination}</CardTitle>
        </CardBody>
        <Button onClick={handleVisited} className='VisitedButton' >
          {trip && trip.visited === false ? 'Add to Visited' : 'You Have Visited'}
        </Button>
        <Button onClick={handleBucketList} className='BucketListButton'>
          {trip && trip.bucket_list === false ? 'Add to Bucket List' : 'This Is In your Bucket List'}
        </Button>
        <Button onClick={handleDelete} className='DeleteButton'>Delete This Trip</Button>
      </Card>

      {trip && <BucketlistList trip={trip} />}
    </div>
  );
};

export default connect(null, { deleteTrip, toggleVisited, toggleBucketList })(TripShow);