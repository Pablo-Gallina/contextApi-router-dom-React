import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const About = () => {
    //Traer el user del estado del UserContext
    const { user } = useContext(UserContext);
    return ( 
        <div className="container text-center mt-5">
            <h1>About Screen</h1>
            {!user ? (
                <h2 className="text-danger">Please Login</h2>
            ) : (
                <div>
                <h3>
                    Name: {user.data.first_name} {user.data.last_name}
                </h3>
                <h3>Email: {user.data.email}</h3>
                <img
                    src={user.data.avatar}
                    alt={user.data.id}
                    width="150px"
                    height="150px"
                />
                </div>
            )}
        </div>
    )
}

export default About
