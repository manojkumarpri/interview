import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Flightcreate from './components/Flightcreate';
import FlighterList from './components/FlighterList';
 const Routes =() => (
     <BrowserRouter >
        <Switch>
            <Route exact path='/' component={Flightcreate}></Route>
            <Route exact path='/flightlist' component={FlighterList}></Route>

           

        </Switch>
    </BrowserRouter>
 )

 export default Routes;