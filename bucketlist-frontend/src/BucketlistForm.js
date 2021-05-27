import React from 'react'

//form that adds to bucketlist list
//add image for bucketlist activity?
const BucketlistForm = (props) => {
return(
    <div>
        <form>
            <label><strong>Create New Bucketlist Activity</strong></label>
            <label>Name of Activity:</label>
            <input type="text"/><br></br>
            <label>Actvity Description:</label>
            <input type="text"/><br></br>
            <input type="submit"/>
        </form>
    </div>
)
}

export default BucketlistForm