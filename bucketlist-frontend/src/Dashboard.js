import userEvent from '@testing-library/user-event';
import React from 'react'
import './App.css';

const Dashboard = (props) => {
    return(
        <div className="dashBoard">
            <h3>Welcome, to the Bucketlist App</h3>
            <h1>What have you ALWAYS wanted to do?</h1>
            <h1>Where have you ALWAYS wanted to go?</h1>



        <button className="button" onClick={props.deleteUser}><h3> Delete Profile</h3></button>
        </div>
    )
}

export default Dashboard