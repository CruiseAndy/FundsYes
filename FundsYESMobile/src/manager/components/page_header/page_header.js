/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import $ from 'jquery';

/* css */
import PageHeaderStyle from './page_header.scss';

/* component */
import SliderMenu from '../slider_menu/slider_menu';

/* image */
import { IMGPATH_LOGO } from '../../../manager/image';

class PageHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    _showSlider = () => {
        // This method is not gooe
        $( "#sliderMenu" ).toggle( "slow");
    }

    render() {
        return (
            <div className="hearder">
                <div className="slider-bar" onClick={this._showSlider}>
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                <div className="logo">
                    <img src={IMGPATH_LOGO} />
                    <hr />
                </div>
                <div id="sliderMenu" className="slider-menu">
                    <SliderMenu />
                </div>
            </div>
        );
    }
}

export default PageHeader;