import React from 'react'

const Dashboard = (props) => {
    return(
        <div>
            <h3>Welcome, User</h3>
            <h1>What have you ALWAYS wanted to do?</h1>
            <h1>Where have you ALWAYS wanted to go?</h1>



        <button className="button" onClick={props.deleteUser}><h3> Delete Profile</h3></button>
        </div>
    )
}

export default Dashboard