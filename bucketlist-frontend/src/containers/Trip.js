import {connect} from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { fetchTrips } from '../actions/Trips';
import TripForm from '../TripForm';
import TripShow from '../TripShow';
import TripList from '../TripList'
import PreviousTrips from '../PreviousTrips';
import BucketlistList from '../BucketlistList';
import {useSelector} from 'react-redux'
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'



const Trip = (props) => {

    const dispatch = useDispatch()


    useEffect (() => {
        if( localStorage.token)
        {fetchTrips(dispatch)}
    }, [] )



const tripState = useSelector(state => state.tripState)

console.log(tripState)

        return(
            <div>
                <TripForm component={TripForm}/>
                <TripList trips={tripState.trips} />
                { tripState.trips && <TripShow trips={tripState.trips}/>}
                {tripState.trips && <PreviousTrips trips={tripState.trips}/> }
                
                {tripState.trips && <BucketlistList trips={tripState.trips}/>}
                
                {/* <Router> */}
                {/* <Switch> */}
                    {/* <Route exact path='/trips/new' component={TripForm} />
                    <Route exact path='/tripshow' render={(routerProps) => <TripShow trip={tripState.trips}/>} /> */}
                    {/* <Route exact path='/triplist' render={(routerProps) => <TripList {...routerProps} trips={tripState.trips} />} /> */}
                    {/* <Route exact path='/trips/visited' render={(routerProps) => <PreviousTrips {...routerProps} trips={props.trips}/>} />
                    <Route exact path='/trips/bucketlist' render={(routerProps) => <BucketlistList {...routerProps} trips={props.trips} />} /> */}
                {/* </Switch> */}
                {/* </Router> */}
            </div>
        )
}


// const mapStateToProps = (state) => {
//     console.log(state)
// return{
//     trips: state.trips
// }

// }


// export default connect(mapStateToProps,{ fetchTrips })(Trip);
export default Trip