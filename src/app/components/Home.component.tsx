import * as React from 'react';
import {SectionCard} from './common'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'
const Men = require( '../../assets/images/men.jpg')
const Women = require('../../assets/images/women.jpg')

export default class Home extends React.Component{
    render(){
        return(
            <div id="home-container-div">
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-md-offset-3" id="men-box">
                        <Link to='/men'><SectionCard image={Men}/></Link>  
                    </div>
                    <div className="col-xs-12 col-md-4" id="women-box">
                        <Link to='/women'><SectionCard image={Women}/></Link> 
                    </div>
                </div>
                        
            </div>
        )
    }
}