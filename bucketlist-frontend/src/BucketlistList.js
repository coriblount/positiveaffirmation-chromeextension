import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle} from 'reactstrap';



const BucketlistList = props => {
    console.log(props)
    return (
        <div>
        <h3>Your Bucketlist Trips</h3>
        {props.trips && props.trips.map(trip => {
            if (trip.bucketlist === true) {
            return (
                <Link key={trip.id} to={`/trip/${trip.id}`}>
                <Card key={trip.id}>
                    <CardBody>
                    <CardTitle>{trip.name} - {trip.destination}</CardTitle>
                    </CardBody>
                </Card>
                </Link>
            )
            } else {
            return (
                "nothing found"
            )
            }
        })}
        </div>
    );
    };
    
    export default BucketlistList;






