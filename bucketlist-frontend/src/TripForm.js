import React from 'react'
import {connect} from 'react-redux'
import { addTrips } from './actions/Trips'
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class TripForm extends React.Component {
   state = {
       name: '',
       destination: '',
       startDate: '',
       endDate: ''
   } 
handleChange = (e) => {
e.preventDefault()
this.setState({
    [e.target.name]: e.target.value
})
}

handleSubmit = (e) => {
e.preventDefault()
const path = `/Trip`;
this.props.addTrip(this.state, this.props.history, path);
this.setState({
  name: '',
  destination: '',
  startDate: '',
  endDate: ''
})

}
render(){
    return(
        <div className='DestinationFormContainer'>
            <Form className='DestinationForm' onSubmit={this.handleSubmit}>

{/* <FormGroup row> */}
  <h5>Add a New Trip</h5>
{/* </FormGroup> */}

<FormGroup row>
  <Label> Name</Label>
  <Col >
    <Input type='text' name='name' value={this.state.name} placeholder='Hiking Mt. Everest...' onChange={this.handleChange} />
  </Col>
</FormGroup>

<FormGroup row>
  <Label for='country'>Destination</Label>
  <Col>
    <Input type='text' name='destination' value={this.state.destination} placeholder='Nepal and China . . .' onChange={this.handleChange} />
  </Col>
</FormGroup>

<FormGroup row>
  <Label for='startDate'>Start Date</Label>
  <Col>
    <Input type='text' name='image' value={this.state.startDate} onChange={this.handleChange} />
  </Col>
</FormGroup>

<FormGroup row>
  <Label for='endDate'>End Date</Label>
  <Col>
    <Input type='text' name='image' value={this.state.endDate} onChange={this.handleChange} />
  </Col>
</FormGroup>

<Button>Add Destination</Button>
</Form>
 </div>
 )
}
}

export default connect(null, {addTrips})(TripForm);