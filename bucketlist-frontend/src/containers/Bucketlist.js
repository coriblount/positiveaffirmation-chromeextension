import React from 'react'
import BucketlistActivityList from '../BucketlistActivityList';
import BucketlistForm from '../BucketlistForm';



class Bucketlist extends React.Component {

    render() {
        return(
            <div>
                <BucketlistForm trips={this.props.trips}/>
                <BucketlistActivityList bucketlist_items={this.props.trips && this.props.bucketlist_items}/>

            </div>
        )
    }
}


export default Bucketlist