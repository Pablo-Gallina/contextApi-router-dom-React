import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { userData } from '../helpers/userData';

const Home = () => {
    //Desestructurar el estado del UserContext
    const {user, setUser} = useContext(UserContext);

    const handleLogin = ()=> {
        //Actualizar el estado con los datos que tiene userData
        setUser(userData); //JSON con los datos del usuario
    }

    const handleLogOut = ()=> {
        //Actualizar el estado con los datos que tiene userData
        setUser(null); //JSON con los datos del usuario
    }

    return (
        <>
            <h1>Home</h1>
            {
                //Si el usuario existe, esta logueado
            }
            <button className={ `btn btn-${user ? "danger" : "primary"}` } onClick={user ? handleLogOut : handleLogin}>{user ? "LogOut" : "Login"}</button>   
        </>
    )
}

export default Home
