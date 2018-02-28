import * as React from 'react';
import {Categories} from './common'
import Products from './Products.component'
import { Switch, Route} from 'react-router-dom';
import '../../styles/Category.css'
const t_shirt=require('../../assets/images/men/t-shirt.jpg')
const jeans=require('../../assets/images/men/jeans.jpg')
const casual=require('../../assets/images/men/casual.jpg')
const formal=require('../../assets/images/men/formal.jpg')
const party_wear=require('../../assets/images/men/party-wear.jpg')
const accessories=require('../../assets/images/men/accessories.jpg')

let categories=[
    {
        "t-shirt":[],
        "count":10,
        "img-url":t_shirt,
        "type":"T-Shirt"
    },
    {
        "jeans":[],
        "count":8,
        "img-url":jeans,
        "type":"Jeans"
    },
    {
        "casual":[],
        "count":8,
        "img-url":casual,
        "type":"Casual"
    },
    {
        "formal":[],
        "count":10,
        "img-url":formal,
        "type":"Formal"
    },
    {
        "party-wear":[],
        "count":5,
        "img-url":party_wear,
        "type":"Party Wear"
    },
    {
        "accessories":[],
        "count":10,
        "img-url":accessories,
        "type":"Accessories"
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