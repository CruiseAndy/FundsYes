/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import ReactStringReplace from 'react-string-replace';

/*
 * @parm string
 * @parm regex : compare regex
 * @parm link : link address
 * @parm openTab : true is open tab site
 * @return : translate string
 */
export const StringLink = (string, regex, link, openTab) => {
    let transString = string;
    let blank = openTab ? "_blank" : "";

    transString = ReactStringReplace(transString, regex, (match, i) => (
        <a key={match + i} href={link} target={blank}>{match}</a>
    ))

    return transString;
}