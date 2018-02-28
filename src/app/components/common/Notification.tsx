import * as React from "react";
const notification_img=require('../../../assets/images/notification-icon.png');

class Notification extends React.Component{
    render(){
        return(
            <div>
                <img src={notification_img} alt=""/>
            </div>
        )
    }
}

export {Notification}