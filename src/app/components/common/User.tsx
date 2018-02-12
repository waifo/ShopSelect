import * as React from "react";
const user_img=require('../../../assets/images/user-icon.png')

class User extends React.Component{
    render(){
        return(
            <div>
                <img src={user_img} alt=""/>
            </div>
        )
    }
}

export {User}