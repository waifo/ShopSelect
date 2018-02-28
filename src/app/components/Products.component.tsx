import * as React from 'react';
import '../../styles/Products.css'
import {ProductCard} from './common'

export default class Products extends React.Component{
    render(){
        return(
            <div id="products-container-div">
                <ProductCard/>
            </div>
        )
    }
}