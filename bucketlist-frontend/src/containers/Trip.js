import React from 'react'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { fetchTrips } from '../actions/Trips';
import TripForm from '../TripForm';
import TripShow from '../TripShow';
import TripList from '../TripList'
import PreviousTrips from '../PreviousTrips';

class Trip extends React.Component {
    componentDidMount(){
        this.props.fetchTrips()
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path='/trips/new' component={TripForm}/>
                    <Route path='trips/:id' render={(routerProps) => <TripShow {...routerProps} trips={this.props.trips}/>} />
                    <Route path='/trips' render={(routerProps) => <TripList {...routerProps} trips={this.props.trips} />} />
                    <Route path='/trips/visited' render={(routerProps) => <PreviousTrips {...routerProps} trips={this.props.trips}/>} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
return{
    trips: state.trips
}
}

export default connect(mapStateToProps, { fetchTrips })(Trip);
