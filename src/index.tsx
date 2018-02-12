import * as React from 'react';
import {hydrate,render} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './app/reducers'
import App from './app/App'
const store =createStore(reducers)
    render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,document.getElementById("app")
    );
