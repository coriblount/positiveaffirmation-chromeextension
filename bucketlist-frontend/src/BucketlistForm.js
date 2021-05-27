import React from 'react'
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addActivity } from '../actions/BucketlistActions';
//form that adds to bucketlist list
//add image for bucketlist activity?


class BucketlistForm extends React.Component {
state = {
name: '',
description: ''
}

handleChange = (e) => {
this.setState({
    [e.target.name]: e.target.value
})
}

handleSubmit = (e) => {
e.preventDefault()
this.props.addActivity(this.state, this.props.trip.id)
this.setState({
    name: '',
    description: ''
})
}


render(){
    return(
        <div>
            <Form onSubmit={this.handleSubmit}> 
                    <h5>Add a Bucketlist Activity</h5>
                    <FormGroup row>
                    <Label> Things I'd like To Do: </Label>
                    <Col>
                    <Input type='text' name='name' value={this.state.name} placeholder='See Eiffel Tower' onChange={this.handleChange}/>
                    </Col>
                    </FormGroup>

                <FormGroup row>
                <Label> Activity Description</Label>
                <Col>
                <Input type='text' name='description' value={this.state.description} placeholder='Tour, Shop and Dine inside Eiffel Tower' onChange={this.handleChange} />
                </Col>
                </FormGroup>

                <Button>Add Activity</Button>
            </Form>
        </div>
    )
}

}

export default connect(null, { addActivity })(BucketlistForm);

export default BucketlistForm