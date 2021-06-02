import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { deleteTrip, toggleBucketList, toggleVisited } from './actions/Trips';
// import Bucketlist from './Bucketlist';
import Bucketlist from './containers/Bucketlist';



const TripShow = (props) => {
  

  let trip = props.trips.find(trip => trip.id === props.trips[3].id) ;
  // let trip = props.trips.filter(trip => trip.id === props.trips.id)


  const handleDelete = () => {
    props.deleteTrip(trip.id);
    // const path = `/trips`;
    // props.history.push(path);
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

      {trip && <Bucketlist trip={trip} />}
    </div>
  );
};

export default connect(null, { deleteTrip, toggleVisited, toggleBucketList })(TripShow);