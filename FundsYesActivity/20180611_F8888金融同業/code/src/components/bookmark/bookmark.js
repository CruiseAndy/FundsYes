/* 
 * Created by kevin in 2018/03/19
 */

/* tool */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ children, ...props }) => {
    return (
        <div  className={props.className} style={{ position: "fixed", ...props.style}}>
            {children}
        </div>
    );
}

Bookmark.propTypes = {
    children: PropTypes.node.isRequired,
    webImgName: PropTypes.string,
    mobileImgName: PropTypes.string,
};

Bookmark.defaultProps = {
    imgLink: '',
    openTab: false,
};

export default Bookmark;