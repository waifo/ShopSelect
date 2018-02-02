import * as React from 'react';
import {Categories} from '../common'
import '../../../styles/women/Women.css'

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
export default class Women extends React.Component{
    render(){
        return(
            <div id="women-container-div">
                <Categories categories={categories}/>
            </div>
        )
    }
}