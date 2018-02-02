import * as React from 'react';
import {Categories} from './common'
import Products from './Products.component'
import { Switch, Route} from 'react-router-dom';
import '../../styles/Category.css'

let categories=[
    {
        "t-shirt":[],
        "count":10
    },
    {
        "jeans":[],
        "count":8
    },
    {
        "casual":[],
        "count":8
    },
    {
        "formal":[],
        "count":10
    },
    {
        "party-wear":[],
        "count":5
    },
    {
        "accessories":[],
        "count":10
    }
    
]
export default class Category  extends React.Component{
    
    render(){
        return(
            <div id="categories-container-div">
                 <Switch>
                    <Route exact path='/men'><Categories categories={categories}/></Route>
                    <Route exact path='/women'><Categories categories={categories}/></Route>
                    <Route path='/men/t-shirt' component={Products}/>
                 </Switch>
                
            </div>
        )
    }
}