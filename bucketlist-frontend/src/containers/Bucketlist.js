import React from 'react'
import BucketlistActivityList from '../BucketlistActivityList';
import BucketlistForm from '../BucketlistForm';




class Bucketlist extends React.Component {



    render() {
        return(
            <div>
                <BucketlistForm trip={this.props.trip}/>
            { this.props.trip && <BucketlistActivityList bucketlist_items={this.props.trip.bucketlist_items}/>}
            </div>
            
        )
    }
}


export default Bucketlist