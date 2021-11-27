import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../pages/Home';
import About from '../pages/About';

//Version 5 del react-router-dom
const AppRoutes = () => {
    return (
        <Router>
            {/* El header, es el componente en donde esta el path "navegacion" (/home, /about) */}
            <Header />

            {/* Switch es el que permite hacer el cambio de pagina */}
            <Switch> 
                {/* Dentro del switch van las definiciones de las rutas del router (/about, /, etc...), en esta parte podriamos manejar cuando una ruta no exista, o no la tenemos definida */}

                {/*  Opcion valida <Route path="/">
                    {// el componente que vamos a cargar en esa ruta}
                    <Home />
                </Route> */}

                {/* opcion 2 (mas resumido) */}
                {/* la palabra exact, se usa para que el path no se "pierda o funcione mal" */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />

            </Switch>
        </Router>
    )
}

export default AppRoutes
