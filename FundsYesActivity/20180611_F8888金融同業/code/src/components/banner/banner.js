/* 
 * Created by kevin in 2018/03/19
 */

/* tool */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* css */
import BannerStyle from './banner.scss';

const Banner = ({ children, ...props }) => {
    return (
        <div className="banner-main" style={props.style}>
            <a href={props.imgLink} target={props.openTab ? "_blank" : ""}>
                <img className="web-mode" src={require(`../../images/${props.webImgName}`)} />
                <img className="mobile-mode" src={require(`../../images/${props.mobileImgName}`)} />
                {children}
            </a>
        </div>
    );
}

Banner.propTypes = {
    webImgName: PropTypes.string,
    mobileImgName: PropTypes.string,
};

Banner.defaultProps = {
    imgLink: '',
    openTab: false,
};

export default Banner;