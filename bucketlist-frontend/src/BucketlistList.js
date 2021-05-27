import React, { Component } from 'react'
import Bucketlist from './containers/Bucketlist'

//maps through bucketlist

class BucketlistList extends Component {
renderList = () => {
return this.props.bucketlist.map(bucketlist => {
  return <Bucketlist key={bucketlist.id} singleActivity={bucketlist}/>
})
}

    render() {
        return(
        <div>
            {this.renderList()}
        </div>)
    }
}

export default BucketlistList