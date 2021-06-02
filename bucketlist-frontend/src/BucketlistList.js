import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle} from 'reactstrap';



const BucketlistList = props => {
    return (
        <div>
        <h3>Your Bucketlist Trips</h3>
            
        {props.trips && props.trips.map(trip => {
            console.log(trip.bucketlist)
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
            } 
            else {
            return (
                "No items in Bucketlist"
            )
            }
        })}
        </div>
    );
    };
    
    export default BucketlistList;






