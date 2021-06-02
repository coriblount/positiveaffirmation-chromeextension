import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { deleteActivity } from './actions/BucketlistActions'
import PreviousTrips from './PreviousTrips';

const BuckletlistActivityList = (props) => {


const handleDelete = (e, trip) => {
e.preventDefault()
props.deleteActivity(trip.id)
}
console.log(props.bucketlist_items)
    return(
        <div>
            {props.bucketlist_items && props.bucketlist_items.length === 0 ? <h3> There are currently no Bucketlist Activities for this Trip </h3> : <h3>Below are bucketlist activities for this trip</h3>}
            <ListGroup>
                {props.bucketlist_items && props.bucketlist_items.map(bucketlist =>
                    <ListGroupItem key={bucketlist.id}> {bucketlist.name}
                    <Button onClick={(e) => handleDelete(e, bucketlist)}> Delete This Item from Bucketlist!</Button>
                    </ListGroupItem>  
                    
                        )}
            </ListGroup>
        </div>
    )
}

export default connect(null, { deleteActivity })(BuckletlistActivityList);