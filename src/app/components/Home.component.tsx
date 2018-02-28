import * as React from 'react';
import {SectionCard,CarouselComponent,SlickCarousel,SearchHeaderBar,Notification,Cart,User} from './common';
import Footer from './Footer.component'
import { Link } from 'react-router-dom';
import '../../styles/Home.css';
const Men = require( '../../assets/images/men.jpg');
const Women = require('../../assets/images/women.jpg');

export default class Home extends React.Component{
    render(){
        return(
            <div id="home-container-div">
                <div id="home-searchbar-div">
                    <div id="site-title">
                        <h2>Shop Select</h2>
                    </div>
                    <div className="search-bar">
                        <SearchHeaderBar/>
                    </div>
                    <div id="header-user">
                        <div id="notification-div">
                            <Notification/>
                        </div>
                        <div id="cart-div"><Cart/></div>
                        <div id="logged-div"><User/></div>
                    </div>
                </div>
                <div id="home-carousel-div">
                    <div className="">
                        <CarouselComponent/>
                    </div>
                </div>
                <div id="home-category-div">
                    <div className="row">
                        <div className="col-xs-12 col-md-6" id="men-box">
                            <Link to='/men'><SectionCard image={Men}/></Link>  
                        </div>
                        <div className="col-xs-12 col-md-6" id="women-box">
                            <Link to='/women'><SectionCard image={Women}/></Link> 
                        </div>
                    </div>
                </div>
                <div id="slick-carousel-div">
                <h3>Offers for you</h3>
                    <div className="">
                        <SlickCarousel/>
                    </div>
                </div>                       
                <div id="slick-carousel-div">
                <h3>Trending</h3>
                    <div className="">
                        <SlickCarousel/>
                    </div>
                </div>                       
                <div id="slick-carousel-div">
                <h3>Cashbacks</h3>
                    <div className="">
                        <SlickCarousel/>
                    </div>
                </div>
                <div id="footer-section-main-div">
                    <Footer/>
                </div>                       
            </div>
        )
    }
}