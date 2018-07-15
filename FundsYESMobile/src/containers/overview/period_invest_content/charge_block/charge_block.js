/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';

/* css */
import ChargeBlockStyle from './charge_block.scss';

/* image */
import { IMGPATH_CLOSE } from '../../../../manager/image';


const tempPromotions = "鉅亨優惠手續費率0.89%";
const tempRefWorth = "17.80";

let blockDataModule =
{
    show: true,
    chargeDate: "",
    money: "",
    promotion: "",
    worth: ""
}

class ChargeBlock extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            chargeData: {
                show: true,
                Date: "",
                money: "",
                promotion: "",
                worth: ""
            }
        }
    }

    _changeDate = e => {

        let chargeDate = e.target.value;
        let now = new Date();
        let nowDate = now.getDate();
        let nowMonth = now.getMonth();
        let nowYear = now.getFullYear();

        if(chargeDate == "")
            return;
        
        if (chargeDate > nowDate) {
            if (nowMonth == 12) {
                nowMonth = 1;
                nowYear += 1;
            }
            else
                nowMonth += 1;
        }

        this.setState({ chargeData: Object.assign( this.state.chargeData, update(this.state.chargeData, {Date: {$set: nowYear + "/" + nowMonth + "/" + chargeDate }}))});
        this.props.setBlockData( this.props.blockNum, this.state.chargeData );
    }

    _changeMoney = e => {
        this.setState({ chargeData: Object.assign( this.state.chargeData, update(this.state.chargeData, {money: {$set: e.target.value }}))});
        this.props.setBlockData( this.props.blockNum, this.state.chargeData );
    }

    _showPromotion = () => {

        if (this.state.chargeData.money !== "") {
            this.setState({ chargeData: Object.assign( this.state.chargeData, update(this.state.chargeData, {promotion: {$set: tempPromotions }}))});
            this.setState({ chargeData: Object.assign( this.state.chargeData, update(this.state.chargeData, {worth: {$set: tempRefWorth }}))});
        } else {
            this.setState({ chargeData: Object.assign( this.state.chargeData, update(this.state.chargeData, {promotion: {$set: "" }}))});
            this.setState({ chargeData: Object.assign( this.state.chargeData, update(this.state.chargeData, {worth: {$set: "" }}))});
        }

        this.props.setBlockData( this.props.blockNum, this.state.chargeData );
    }
    
    render() {
        return (
            <div>
                <div className="RSP-form">
                    <div className="form-subhead">
                        <span>扣款日期</span>
                        {
                            this.props.blockNum > 1 ? <img src={IMGPATH_CLOSE} onClick={e => this.props.deleteBlock(this.props.blockNum)} /> : null
                        }
                    </div>
                    <div className="form-datas">
                        <div className="date-wrap">
                            <select onChange={e => this._changeDate(e)}>
                                <option value="">== 請選擇 ==</option>
                                <option value="6">每月 6 日</option>
                                <option value="16">每月 16 日</option>
                                <option value="26">每月 26 日</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-subhead">
                        <div>
                            <span>扣款金額</span>
                        </div>
                        <div>
                            <span className="glyphicon glyphicon-question-sign"></span>
                            <span>說明</span>
                        </div>
                    </div>
                    <div className="form-datas">
                        <div className="form-amount">
                            <input type="text" onBlur={ e => this._showPromotion() } onChange={ e => this._changeMoney(e) } />
                        </div>
                    </div>
                    <div className="form-subhead">優惠活動</div>
                    <div className="form-datas">
                    {
                        this.state.promotions !== "" ? <div>{this.state.chargeData.promotion}</div> : null
                    }
                    </div>
                    <div className="form-subhead">手續費試算</div>
                    <div className="form-datas">
                    {
                        this.state.refWorth !== "" ? <div>{this.state.chargeData.worth}</div> : null
                    }
                    </div>
                    <div className="form-subhead">預計下次扣款日</div>
                    <div className="form-datas">{this.state.chargeData.Date}</div>
                </div>
            </div>
        );
    }
}

export default ChargeBlock;