/* 
 * Created by kevin in 2018/01/10
 */

/* tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component */
import Step5 from './step5';

const mapStateToProps = state => {
    const { email } = state.Step1Data;

    return { email };
}

export default connect(mapStateToProps, {})(Step5);