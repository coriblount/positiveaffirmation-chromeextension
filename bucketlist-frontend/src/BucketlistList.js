import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle} from 'reactstrap';
//maps through bucketlist
//return trips on bucketlist


const BucketlistList = props => {
    return (
        <div>
        <h3>Your Bucketlist Trips</h3>
        {props.trips && props.trips.map(trip => {
            if (trip.bucket_list === true) {
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
                null
            )
            }
        })}
        </div>
    );
    };
    
    export default BucketlistList;






