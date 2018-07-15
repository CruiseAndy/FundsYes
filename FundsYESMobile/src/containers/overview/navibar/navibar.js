/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

/* css */
import NavibarStyle from './navibar.scss';

/* component */
import { overviewChgContainer } from '../../../actions/index'

class TransCurrency extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            containerIndex: 0,
        }
    }

    _changeClass = (e) => {
        $("a").removeClass("active");
        e.target.classList.add("active");
    }
    
    render() {
        return (
            <div>
                <ul className="navibar-main">
                    <li onClick={() => this.props.overviewChgContainer(0)}>
                        <a className="active" onClick={e => this._changeClass(e)}>
                            <span className="glyphicon glyphicon-user"></span>
                            <br />帳戶總覽
                        </a>
                    </li>
                    <li onClick={() => this.props.overviewChgContainer(1)}>
                        <a onClick={e => this._changeClass(e)}>
                            <span className="glyphicon glyphicon-check"></span>
                            <br />單筆申購
                        </a>
                    </li>
                    <li onClick={() => this.props.overviewChgContainer(2)}>
                        <a onClick={e => this._changeClass(e)}>
                            <span className="glyphicon glyphicon-calendar"></span>
                            <br />定期定額
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect(null, { overviewChgContainer })(TransCurrency);