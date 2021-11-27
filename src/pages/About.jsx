import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const About = () => {
    //Traer el user del estado del UserContext
    const { user } = useContext(UserContext);
    return ( 
        <div>
            <h1>About</h1>
            {
                user && <div> <h1>{user.data.first_name}</h1> <h1>{user.data.last_name}</h1> </div>
            }
        </div>
    )
}

export default About
