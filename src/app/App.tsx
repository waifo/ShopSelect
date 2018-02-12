import * as React from 'react';
import {Switch,Route} from "react-router-dom";
import routes from "../routes/routes";
import registerServiceWorker from '../registerServiceWorker';
import '../styles/App.css'


export default class App extends React.Component{
    componentDidMount(){
        registerServiceWorker();
    }
    render(){
        return(
            <div className="" id="site-container">

                 <Switch>
                   {routes.map((route,i)=>{
                       return <Route key={i} {...route}/>
                   })}
                 </Switch>
                 
            </div>
        )
    }
}


// registerServiceWorker();  // Runs register() as default function


// import * as React from 'react';
// import * as ReactDOM from 'react-dom';


