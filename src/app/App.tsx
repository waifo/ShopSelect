import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import reducers from './reducers'
import Home from './components/Home.component'
import Category from './components/Category.component'
import registerServiceWorker from '../registerServiceWorker';
import '../styles/App.css'


const store =createStore(reducers)
class App extends React.Component{
    render(){
        return(
            <div className="" id="site-container">
                 <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/men' component={Category}/>
                    <Route path='/women' component={Category}/>
                 </Switch>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
         <App/>
       </BrowserRouter>
    </Provider>,document.getElementById("app")
)

registerServiceWorker();  // Runs register() as default function