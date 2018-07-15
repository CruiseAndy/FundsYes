/* 
 * Created by kevin in 2018/01/02
 */

/* tools */
import React, { Component } from 'react';

/* css */
import './header.scss';

class TitleBar extends Component {
    render() {
        return (
            <div className="titleBar">
                <div className="container Common-Container">
                    <img className="imgLogo" src={require("../../images/logo_head.png")} />
                </div>
            </div>
        );
    }
}

export default TitleBar;