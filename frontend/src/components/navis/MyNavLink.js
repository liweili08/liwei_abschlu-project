import {NavLink} from "react-router-dom";
import React, {Component} from 'react';

class MyNavLink extends Component {
    render() {
        //console.log(this.props);
        return (
            <NavLink className={({isActive})=>isActive?"test":"list-group-item"}  {...this.props} />
        );
    }
}

export default MyNavLink;

/*
export default function MyNavLink(props){

    return(
        <NavLink className={({isActive})=>isActive?"test":"list-group-item"}  {...this.props} />
    );
}*/
