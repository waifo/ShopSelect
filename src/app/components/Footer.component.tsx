import * as React from 'react';
import '../../styles/Footer.css';

const location = require('../../assets/images/location.png')
const facebook = require('../../assets/images/facebook.png')
const twitter = require('../../assets/images/twitter.png')
const googleP = require('../../assets/images/google.png')
const youtube = require('../../assets/images/youtube.png')
export default class Footer extends React.Component{
    render(){
        return(
            <div id="footer-section-div">
                <div id="footer-upper" className="row">
                    <div id="footer-help-div" className="col-xs-4">
                        <div>Payment</div>
                        <div>Shipping</div>
                        <div>Cancellation&Returns</div>
                        <div>FAQ</div>
                    </div>
                    <div id="footer-shop-select-div" className="col-xs-4">
                        <div>Contact Us</div>
                        <div>About Us</div>
                        <div>Careers</div>
                        <div>Press</div>
                    </div>
                    <div id="footer-misc-div" className="col-xs-4">
                        <div>Online Shopping</div>
                        <div>Gift Card</div>
                        <div>Online Shopping</div>
                    </div>
                </div>
                <div id="footer-lower" className="row">
                    <div id="footer-track-div" className="col-xs-5">
                        <img src={location} alt=""/>
                        <span>Track Your Order</span>   
                    </div>
                    <div id="stay-connected-div" className="col-xs-7">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={googleP} alt=""/>
                        <img src={youtube} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}