import * as React from "react";
const cart_img=require('../../../assets/images/cart-icon.png')

class Cart extends React.Component{
    render(){
        return(
            <div>
                <img src={cart_img} alt=""/>
            </div>
        )
    }
}

export {Cart}